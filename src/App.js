import './App.css';
import Helmet from "react-helmet";
import Calc from './Calc'

function App() {
  return (
<>
<Helmet>
  <meta charset="utf-8" />
  <title>Calculator</title>
</Helmet>
<Calc />
</>
  );
}

export default App;
