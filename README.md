# kitesurfing

Test project for internship. Based on kitesurfing, with information about kitesurfing locations. This locations are showed on map, with spots and popups for each place. Also includes a table with all locations and a log-in sign-up feature.

In this project you can see kitesurfing locations from all around the world. There are 3 main components. 
1. The NavigationBar with the name of the app, an AddSpot button and the Avatar button that allows you to logIn/SignUp.
2. The map build with leaflet and react-leaflet. Shows all the spots updates to the actions the user makes. All the spots have a bind popup with informations and the posibility to add them to favorites. Also there is a filter button on the dashboard that allows the user to filter the spot and update the data on the map and also on the table component.
3. TableComponent that includes all the data about the spots. They can be filtered by name/country using the SearchBar but also with the filter on the dashboard. 

In building this project i included a few libraries I`m personally very confident with: 
1. Leaflet + react-leaflet;
2. React-redux, react-router-dom, reselect;
3. @mui


Using the app: 

- The app will start by showing the main page, with the map and the table coresponding to data already exsiting.
- All spots will be shown on map, with greenIcons (all the spots). The user can select one spot (it will turn red = selectedSpot), and the map will automatically center the view to that spot. By clicking again on the spot the user can see the popup with the informations about the lcoation.
- The favorites will only apear if the user will Login/ SignUp. Also you cannot add newFavorites while in guest mode.
- Some of the table labels have buttons that allows the user to sort the information. The buttons are hidden, but will show up when hovering over a certain label.
- The user can click on the rows on the table. That will fire the app to focus the view on the map, and center the map on the selected spot (will turn red as selected).
- The user can add a new spot, but clicking the "Add Spot" button. The user will insert the required information, and can choose to confirm or abort the event. The spot will not be added if there is no markers placed on the map (coordinates are automatically set up by adding the marker on the map). The app doesn`t allow to add the spot and will fire up an alert telling the user to place a marker on the map. The redux state will update itself and the data will show on the map and also in the table.
- The user can logIn by pressing the Avatar on the NavigationBar. That will redirect the user to the LogIn page. Here the user can log in with any user/password as requested but can also go for the SignUp instead.
- The signUp feature will require the user to fill certain information about himself. If the data requirements are not fulfield the app will not allow the signUp and will fire up an alert. The email must be also a real one. If the mail doesn`t match the requirements another alert will be triggered.
-After the signup/login the user will be redirected back to the main page, this time with the favorites spots shown to him in the map marked with the YELLOW icons. 
- The user can select now to add/ delete favorites either by the button the footer of the popUp or the star contained in the popUp(filled if favorite, empty if not)
- To log out the user has to click again on the avatar. This time a button will be displayed that will allow the user to logOut. After the favorites will pe hidden again.
- Filtering the spots can be done with the dashboard filter, with country and probability or just one of these, or by using the SearchBar from the table. Both will allow the spots to be fitlered on the map and also in the table. To cancel the filtering the user must press again on the fitlers on the dashboard that will delete the current filters, or by submitting an empty  SearchBar.
-The "name" on the navigationBar can be used if not on the main page to redirect back  to the root.


Setup: 

-download or clone the repository
-run npm install
-npm run start
