
const [newPosition, setNewPosition] = useState(null);

// SET NEW PLACES/MARKERS ON MAPCLICK
const onMapClick = (e) => {
   setNewPosition({
     lat: e.latLng.lat(),
     lng: e.latLng.lng()
   });
   setShowAddModal(true);
 };

 const closeAddModal = () => {
   setShowAddModal(false);
   setNewPosition(null);
 };

 {/* NEW RESTARUANTS MARKERS AND INFOWINDOW */}
 {
   newPosition &&
   <AddNewModal
       visible={showAddModal}
       newPlaceLat={newPosition.lat}
       newPlaceLng={newPosition.lng}
       onAddRestaurant={(res) => {
         setNearbyRestaurants([res, ...nearbyRestaurants]);

         // console.log(nearbyRestaurants);
         closeAddModal();
       }}
       closeModal={() => {
         closeAddModal();
       }}
   />
 }


