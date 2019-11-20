import React, { useEffect } from "react";
import View from "./view";
import GlobalStyle from "./styles";

function App() {
  let refEl = null;
  useEffect(() => {
    console.log(refEl);
  }, [refEl]);
  return (
    <>
      <View
        el="main"
        className="App"
        flex
        justifyContentCenter
        alignItemsCenter
        psRelative
        wdHg="100%"
        bgCl="#09f"
        _mediaScrean={{
          dimensions: "max-width: 720px",
          style: { bgCl: "#003" }
        }}
        getRef={ref => (refEl = ref)}
      >
        <View
          el="h1"
          className="text"
          cl="#fff"
          ft="50px arial"
          ftBold
          hoverThis={{ cl: "#ddd" }}
        >
          Hello jsoft-react-view!
        </View>
        
        <View
          el="article"
          pureStyle={`
            padding: 10px;
            :hover {background: red}
            & + article {background: blue}
        `}
        />


      </View>
      <GlobalStyle />
    </>
  );
}

export default App;
