import Logo from "../assets/logo.png";
import Doctor from "../assets/doctor.png";
import Button from "../components/Button";

function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      {/* navBar */}
      <div className="flex justify-between items-center py-8">
        <div className="flex gap-4 items-center ">
          <img src={Logo} alt="Not Found" className="w-12 h-12" />
          <h3 className="font-semibold text-2xl">NovaNarture</h3>
        </div>

        {/* Navmenu */}
        <div className="flex gap-8">
          <span>Home</span>
          <span>About</span>
          <span>Gallery</span>
          <span>Testimonies</span>
          <span>FAQ</span>
        </div>
        <Button title={"Contact Us"} bgColor="bg-secondaryDark" />
      </div>

      {/* Hero section */}
      <div className="grid grid-cols-2">
        {/* Intro text */}
        <div className="flex flex-col gap-12">
          <h1 className="text-6xl font-semibold">
            Healthy Minds, Happy Lives{" "}
            <span className="text-secondaryLight">Mental Health</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet
            at quam.
          </p>
          <div>
            <Button title={"Register"} bgColor="bg-secondaryDark" />
            <Button title={"Login"} bgColor="bg-secondaryDark" />
          </div>
        </div>

        <img src={Doctor} alt="Doctor" />
      </div>
    </div>
  );
}

export default Home;
