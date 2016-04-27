var Hotel = React.createClass({
  render: function(){
    return (
      <div>
        <HotelChild />
      </div>
    )
  }
})
var HotelChild = React.createClass({
  render: function(){
    return (
      <div id='welcomeMsg'>
        <a href='/hotels/signin' id='signin'>Sign In</a><br/>
        <a href='/hotels/signup' id='signup'>Sign Up</a>
        <h1 id='hotelTitle'>Welcome to the Hotel List</h1>
        <h3>Use the navigation above to begin</h3>
      </div>
    )
  }
})

console.log("Hello")
ReactDOM.render(<Hotel title='Welcome to the Hotel List'/>, document.getElementById('entry-point'))
