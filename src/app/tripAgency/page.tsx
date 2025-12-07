import TabNavigation from "./components/TabNavigation"

export default function TripAgency(){
  return (
    <section
    className="w-full min-h-svh flex flex-col gap-4">
      <TabNavigation children=
      {[<Cp1 key="1"/>, <Cp2 key="2"/>, <Cp3 key="3"/>, <Cp4 key="4"/>]}
      />
    </section>
  )
}

function Cp1(){
  return (
    <div className="">Component 1</div>
  )
}
function Cp2(){
  return (
    <div className="">Component 2</div>
  )
}
function Cp3(){
  return (
    <div className="">Component 3</div>
  )
}
function Cp4(){
  return (
    <div className="">Component 4</div>
  )
}