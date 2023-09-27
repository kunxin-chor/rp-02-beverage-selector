/*
A component is any function
that return JSX and its
first alphabet is UpperCase
*/

function Header() {
    return (<div className="header">
        <h1>Your Favorite Beverage Selector</h1>
    </div>);
}

//  export out for other functions to use
// require is from commonjs (industry-method)
// export is the W3 committe official method
export default Header;