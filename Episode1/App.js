const heading = React.createElement("h1", {},"Summaiya Here");
/**
 * React.createElement-> takes 3 arguments
 *    -> html element
 *    -> {}(object) where we give attributes(id,classname,..) inside it.
 *    -> content which is gient to the html element(it is called "child")
 */

console.log(heading);  // object
// heading -> it is an react element(nothing but it is an object)

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// render method is responsible for converting this object into heading tag and place into DOM.



// -------------cerating nested react elements---------------------------------

/**
 * <div id="parent">
 *      <div id="child">
 *            <h1>i an h1 tag</h1>
 *      </div>
 * </div>
 */

const element = React.createElement("div",{id: "parent"},
   React.createElement("div",{id: "child"},
   React.createElement("h1",{},"i am h1 tag")
   ) 
);

const nested = ReactDOM.createRoot(document.getElementById("container"));
nested.render(element);


// if we have siblings or if we want multiple childrens then we should use array [].

/**
 * <div id="parent">
 *      <div id="child">
 *            <h1>i an h1 tag</h1>
 *            <h2>i an h2 tag</h2>
 *      </div>
 * </div>
 */

const a = React.createElement("div",{id: "parent"},
   React.createElement("div",{id: "child"},[
    React.createElement("h1",{},"i am h1 tag"),
   React.createElement("h2",{},"i am h2 tag")]
   ) 
);

const dom = ReactDOM.createRoot(document.getElementById("case3"));
dom.render(a);
