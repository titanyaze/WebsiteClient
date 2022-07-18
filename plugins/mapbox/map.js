var w = window.innerWidth;
var varzoom = 8.4
if(w < 600)
{
  varzoom = 8
}
mapboxgl.accessToken =
  "pk.eyJ1IjoidGl0YW55YXplIiwiYSI6ImNsNWpwNXAxYjAyYmYzZG1wazF1ZHFoMmYifQ.mgu4-IMNOl-i870qOT8CRg";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v10", // style URL
  center: [-0.1257136407963344, 51.507364637080826], // starting position
  zoom: varzoom, // starting zoom
});

map.on("load", () => {
  // Add a data source containing GeoJSON data.
  map.addSource("london", {
    type: "geojson",
    data: {
      type: "Feature",
      geometry: {
        type: "Polygon",
        // These coordinates outline Maine.
        coordinates: [
          [
            [0.26215387513434507, 51.608685373451834],
            [0.22424228537570912, 51.63126872789087],
            [0.16981791662752244, 51.65988651291977],
            [0.1253670666556843, 51.67944156295951],
            [0.09315614342560252, 51.68979297496105],
            [0.0035368730602556298, 51.68070764710785],
            [-0.09026820958874282, 51.689033177886216],
            [-0.16428856643653944, 51.68636562872638],
            [-0.23367284730392157, 51.687996928120015],
            [-0.2733908266349374, 51.71471679890291],
            [-0.31900497428904373, 51.71138734598986],
            [-0.3775947620448221, 51.715631730130355],
            [-0.42184098128549863, 51.71303609024156],
            [-0.44786417844383664, 51.6822159648911],
            [-0.5100752193833387, 51.6370475028032],
            [-0.5259409811833677, 51.61682507947435],
            [-0.5348236057473912, 51.57910708368391],
            [-0.526898465417247, 51.553079082303725],
            [-0.5001753144959196, 51.536502387286674],
            [-0.5007703260706649, 51.5141353368613],
            [-0.4947073373072328, 51.498526258422174],
            [-0.5042022946875306, 51.475208929289124],
            [-0.5231730006773319, 51.44902156885729],
            [-0.5393883556965307, 51.42248360074362],
            [-0.5321154267291774, 51.39352869043515],
            [-0.5044708664206894, 51.36742550556181],
            [-0.48494529223700056, 51.3463057497558],
            [-0.4761495494097119, 51.32757773424271],
            [-0.43251961449223586, 51.31423044419677],
            [-0.3935340178602189, 51.30625759100644],
            [-0.33969229524754496, 51.31553577275267],
            [-0.31164528080719833, 51.296259313658965],
            [-0.25620285833554135, 51.272322290295705],
            [-0.20944510856870124, 51.25736754694893],
            [-0.15836805689622224, 51.26770547216714],
            [-0.08668165322805521, 51.25683086738135],
            [-0.03481413991622162, 51.25961982426094],
            [0.053833268837252035, 51.27181130738643],
            [0.08652768447660719, 51.276926407020454],
            [0.12680451720419228, 51.28678443840087],
            [0.14314873917979298, 51.291286785833734],
            [0.16066040558482086, 51.30970832780869],
            [0.15657435008861853, 51.33772108456577],
            [0.15876953866973054, 51.36236972396628],
            [0.19122311843568696, 51.38286061453158],
            [0.2113259010754689, 51.404776025832234],
            [0.22901577886528912, 51.41718106542888],
            [0.23932983428642274, 51.42908409149632],
            [0.23660493316100428, 51.44881893681077],
            [0.25954216088939575, 51.46627634777394],
            [0.2686228128165169, 51.493456512844006],
            [0.27216232244691696, 51.51985027582879],
            [0.2870715611028345, 51.55232928129362],
            [0.2783028666843279, 51.581224093759346],
            [0.2672960485487863, 51.60341962562697],
          ],
        ],
      },
    },
  });

  // Add a new layer to visualize the polygon.
  map.addLayer({
    id: "london",
    type: "fill",
    source: "london", // reference the data source
    layout: {},
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-opacity": 0.5,
    },
  });
  // Add a black outline around the polygon.
  map.addLayer({
    id: "outline",
    type: "line",
    source: "london",
    layout: {},
    paint: {
      "line-color": "#000",
      "line-width": 3,
    },
  });
});
