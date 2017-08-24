angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    // This is so that all table values show at the beginning
    $scope.listings.forEach( (value, index) => {
      $scope.listings[index].searched = true
    });

    // Function filter through listings with search bar
    $scope.search = () => {
      let searchInput = $scope.searchInput.toUpperCase();

      $scope.listings.forEach( (value, index) => {
        if(value.code.toUpperCase().indexOf(searchInput) != -1 ||
            value.name.toUpperCase().indexOf(searchInput) != -1) {
          $scope.listings[index].searched = true
        }
        else $scope.listings[index].searched = false;
      });
    }

    // Function to add new building to the table
    $scope.addListing = () => {
      let code = $scope.addCode;

      $scope.listings.push({
        "code" : $scope.addCode,
        "name" : $scope.addBuilding,
        "address" : $scope.addAddress
      });

      alert(code + " was added to the bottom of your list!");

      $scope.addCode = '';
      $scope.addBuilding = '';
      $scope.addAddress = '';
    }

    // Function to remove building from the table
    $scope.deleteListing = (index) => {
      delete $scope.listings[index];
    }

    // Function to show detailed information about building from table on click
    $scope.showDetails = (index) => {
      $scope.currentBuilding = $scope.listings[index].name;

      if(!$scope.listings[index].address) $scope.currentAddress = "None Available";
      else $scope.currentAddress = $scope.listings[index].address;

      if(!$scope.listings[index].coordinates) {
        $scope.currentLatitude = "None Available";
        $scope.currentLongitude = "None Available";
      }
      else {
        $scope.currentLatitude = $scope.listings[index].coordinates.latitude;
        $scope.currentLongitude = $scope.listings[index].coordinates.longitude;
      }
    }
  }
]);