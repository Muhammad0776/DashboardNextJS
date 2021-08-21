import Dashboard from "../containers/Dashboard";
import CardsContainer from "../containers/Home";

export default function Home() {
  return (
    <div>
      <Dashboard menu={"home"}>
        <CardsContainer />
      </Dashboard>
    </div>
  );
}
