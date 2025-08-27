import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('Bengaluru');
  const [searchQuery, setSearchQuery] = useState('Bengaluru');
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Replace with your actual API keys
  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

  // Map center (India)
  const mapCenter = { lat: 20.5937, lng: 78.9629 };
  
  // Sample weather alert data with coordinates
  const weatherAlerts = [
    { id: 1, lat: 23.2599, lng: 77.4126, severity: 'heavy', location: 'North Goa, South Goa districts of Goa', city: 'Goa' },
    { id: 2, lat: 19.0760, lng: 72.8777, severity: 'moderate', location: 'South Tripura district of Tripura', city: 'Mumbai' },
    { id: 3, lat: 28.7041, lng: 77.1025, severity: 'light', location: 'Dadra And Nagar Haveli district', city: 'Delhi' },
    { id: 4, lat: 26.9124, lng: 75.7873, severity: 'heavy', location: 'Bastar, Dhamtari districts', city: 'Jaipur' },
    { id: 5, lat: 22.5726, lng: 88.3639, severity: 'moderate', location: 'Bolangir', city: 'Kolkata' },
    { id: 6, lat: 13.0827, lng: 80.2707, severity: 'light', location: 'Aravalli, Gandhinagar, Kheda', city: 'Chennai' },
    { id: 7, lat: 15.2993, lng: 74.1240, severity: 'heavy', location: 'Heavy Rain - Alirajpur,Jhabua,Ujjain', city: 'Goa' },
    { id: 8, lat: 17.3850, lng: 78.4867, severity: 'moderate', location: 'HYDRAA', city: 'Hyderabad' },
    { id: 9, lat: 9.9312, lng: 76.2673, severity: 'light', location: 'Kerala districts', city: 'Kochi' },
    { id: 10, lat: 32.7266, lng: 74.8570, severity: 'heavy', location: 'Lightning, Heavy Rain - Gurdaspur', city: 'Amritsar' },
  ];

  const alertsList = [
    { type: 'Moderate Rain', location: 'South Tripura district of Tripura', color: 'bg-orange-500' },
    { type: 'Heavy Rain', location: 'North Goa, South Goa districts of Goa', color: 'bg-red-500' },
    { type: 'Moderate Rain', location: 'Aravalli, Gandhinagar, Kheda, Mahesana, Mahisagar', color: 'bg-orange-500' },
    { type: 'Light Rain', location: 'Dadra And Nagar Haveli district of Dadra and Nagar', color: 'bg-yellow-400' },
    { type: 'Light Rain', location: 'Ahmadabad, Anand, Banas Kantha, Bharuch, Chhota Ud', color: 'bg-yellow-400' },
    { type: 'Light Rain', location: 'Diu district of Dadra and Nagar Haveli and Daman a', color: 'bg-yellow-400' },
    { type: 'Light Rain', location: 'Amreli, Bhavnagar, Botad, Devbhoomi Dwarka, Gir So', color: 'bg-yellow-400' },
    { type: 'Lightning', location: 'ATMAKUR2, KALLUR2, KODUMUR, KOTHAPALLE2 mandals', color: 'bg-yellow-400' },
    { type: 'Lightning', location: 'GUDUR1, KURNOOL, TADA, SULLURPETA mandals', color: 'bg-yellow-400' },
  ];

  const fetchWeatherData = useCallback(async (location = selectedLocation) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${OPENWEATHER_API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error('City not found. Please try again.');
      }
      
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [OPENWEATHER_API_KEY, selectedLocation]);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSelectedLocation(searchQuery);
  };

  const handleMarkerClick = (alert) => {
    setSelectedAlert(alert);
    setSelectedLocation(alert.city);
    setSearchQuery(alert.city);
  };

  const getMarkerIcon = (severity) => {
    const icons = {
      heavy: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      moderate: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
      light: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    };
    return icons[severity];
  };

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="flex flex-col md:flex-row mt-24" style={{ backgroundColor: '#fefefe' }}>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <h1 className="text-2xl font-bold text-[#030455]">India Weather Monitoring Dashboard</h1>
          <p className="text-gray-600 text-sm mt-1">Real-time weather alerts and conditions across India</p>
        </div>

        {/* Map and Alert List Container */}
        <div className="flex-1 flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden m-4">
          {/* Map Container */}
          <div className="flex-1 h-96 md:h-auto relative">
            <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={mapCenter}
                zoom={5}
              >
                {weatherAlerts.map((alert) => (
                  <Marker
                    key={alert.id}
                    position={{ lat: alert.lat, lng: alert.lng }}
                    icon={getMarkerIcon(alert.severity)}
                    onClick={() => handleMarkerClick(alert)}
                  />
                ))}
                
                {selectedAlert && (
                  <InfoWindow
                    position={{ lat: selectedAlert.lat, lng: selectedAlert.lng }}
                    onCloseClick={() => setSelectedAlert(null)}
                  >
                    <div className="p-2">
                      <h3 className="font-bold text-[#030455]">{selectedAlert.location}</h3>
                      <p className="text-sm">Severity: {selectedAlert.severity}</p>
                      <button 
                        className="mt-2 px-3 py-1 bg-[#030455] text-white rounded text-xs"
                        onClick={() => {
                          setSelectedLocation(selectedAlert.city);
                          setSearchQuery(selectedAlert.city);
                        }}
                      >
                        View Weather
                      </button>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </LoadScript>
            
            {/* Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              <button className="bg-white p-2 rounded shadow hover:shadow-lg transition-shadow">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                </svg>
              </button>
              <button className="bg-white p-2 rounded shadow hover:shadow-lg transition-shadow">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
                </svg>
              </button>
              <button className="bg-white p-2 rounded shadow hover:shadow-lg transition-shadow">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Alert List Sidebar */}
          <div className="w-full md:w-60 bg-gray-50 border-t md:border-l md:border-t-0">
            <div className="bg-[#030455] text-white p-3 text-center font-semibold">
              ALERT LIST
            </div>
            <div className="overflow-y-auto h-64 md:h-[calc(100%-52px)]">
              {alertsList.map((alert, index) => (
                <div key={index} className={`${alert.color} text-white p-3 m-2 rounded transition-transform hover:scale-[1.02]`}>
                  <div className="font-semibold">{alert.type}</div>
                  <div className="text-sm">{alert.location}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Weather Widget Sidebar */}
      <div className="w-full md:w-80 p-4 bg-white md:bg-transparent">
        <div className="bg-gradient-to-b from-[#030455] to-[#1a2385] text-white rounded-lg shadow-xl p-6 h-full">
          {/* Search Box */}
          <div className="mb-6">
            <form onSubmit={handleSearch} className="flex items-center bg-white/20 rounded-lg p-2">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <input
                type="text"
                placeholder="Enter city name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none flex-1 placeholder-white/70"
              />
              <button 
                type="submit"
                className="ml-2 p-1 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
            {error && (
              <div className="text-red-300 text-sm mt-2 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            )}
          </div>

          {/* Current Weather */}
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
          ) : weatherData ? (
            <>
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-2">
                  {weatherData.weather && weatherData.weather[0] && (
                    <img 
                      src={getWeatherIcon(weatherData.weather[0].icon)} 
                      alt={weatherData.weather[0].description}
                      className="w-16 h-16"
                    />
                  )}
                </div>
                <div className="text-5xl font-bold mb-2">{Math.round(weatherData.main.temp)}°C</div>
                <div className="text-xl mb-1 capitalize">{weatherData.weather[0].description}</div>
                <div className="flex items-center justify-center text-sm">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span>{weatherData.name}, {weatherData.sys.country}</span>
                </div>
                <div className="text-sm opacity-75 mt-2">Last Updated: {new Date(weatherData.dt * 1000).toLocaleString()}</div>
              </div>

              {/* Weather Details */}
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <div className="bg-white/10 rounded p-3">
                  <div className="opacity-75">Feels Like</div>
                  <div className="font-semibold text-lg">{Math.round(weatherData.main.feels_like)}°C</div>
                </div>
                <div className="bg-white/10 rounded p-3">
                  <div className="opacity-75">Humidity</div>
                  <div className="font-semibold text-lg">{weatherData.main.humidity}%</div>
                </div>
                <div className="bg-white/10 rounded p-3">
                  <div className="opacity-75">Wind Speed</div>
                  <div className="font-semibold text-lg">{weatherData.wind.speed} m/s</div>
                </div>
                <div className="bg-white/10 rounded p-3">
                  <div className="opacity-75">Pressure</div>
                  <div className="font-semibold text-lg">{weatherData.main.pressure} hPa</div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="opacity-75">Sunrise</div>
                  <div className="font-semibold">{formatTime(weatherData.sys.sunrise)}</div>
                </div>
                <div>
                  <div className="opacity-75">Sunset</div>
                  <div className="font-semibold">{formatTime(weatherData.sys.sunset)}</div>
                </div>
                <div>
                  <div className="opacity-75">Visibility</div>
                  <div className="font-semibold">{weatherData.visibility / 1000} km</div>
                </div>
                <div>
                  <div className="opacity-75">Cloudiness</div>
                  <div className="font-semibold">{weatherData.clouds.all}%</div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-10">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>No weather data available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;