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
        _mediaScreen={{
          dimensions: "max-width: 520px",
          style: { bgCl: "purple" }
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
      </View>
      <GlobalStyle />
    </>
  );
}

export default App;
