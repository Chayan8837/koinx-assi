import Graph from "./components/Graph"
import Add from "./components/Add"
import AnalysisPage from "./components/Analysis"
import SantimentPage from "./components/Sentiment"
import About from "./components/About"
import Tocenomics from "./components/Tokenomics"
import Team from "./components/Team"
import Footer from "./components/Footer"




export default function Home() {
  return (
    
    <>
    <main className="space-y-8 mb-8">

      <Graph/>
      <AnalysisPage/>
      <SantimentPage/>
      <About/>
      <Tocenomics/>
      <Team/>

    
  





    </main>
    </>
  );
}
