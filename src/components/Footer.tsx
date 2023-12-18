import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useWebsiteContext } from "../context/context";

export default function Footer() {
  const { footerSocialsInfo, showModal } = useWebsiteContext();

  const socialLink = footerSocialsInfo.map((i) => (
    <a
      key={i.href}
      href={i.href}
      className="w-1/5 h-2/3 flex justify-center items-center"
    >
      <FontAwesomeIcon
        className="h-5/6 w-2/4 p-3 text-thirdColor cursor-pointer border-2 rounded-full 
          border-thirdColor transition-all ease-in-out duration-700 
          hover:border-fourthColor hover:scale-90 hover:text-fourthColor hover:border-opacity-0"
        icon={i.icon}
      />
    </a>
  ));

  return (
    <footer className="w-full h-3/4 bg-mainColor flex flex-col justify-between items-center
        border border-pink-400
      ">
      <div 
        className="h-16 w-full flex justify-between items-center
        border border-emerald-400
        "
      >
        {socialLink}
      </div>

      <div className="w-full h-2/5 flex flex-col justify-center items-center">
        <h1
          id="title"
          className="uppercase transition-all ease-in-out duration-700 
             text-thirdColor text-8xl opacity-90 font-suisseInt peer-hover:text-red-300
          "
        >
          Get in touch{" "}
        </h1>
        <button
          onClick={showModal}
          onMouseEnter={() => {
            document.getElementById("title")!.style.color = "#FFFFFF";
          }}
          onMouseLeave={() => {
            document.getElementById("title")!.style.color = "#D3D3D3";
          }}
          className="h-16 w-2/12 btn bg-thirdColor border-mainColor font-normal 
            rounded-3xl text-mainColor z-50 absolute uppercase text-3xl
            transition-all ease-in-out duration-700 
            hover:text-fourthColor hover:bg-mainColor hover:border-fourthColor 
            hover:scale-105 peer
          "
        >
          {" "}
          Contact{" "}
        </button>
      </div>
    </footer>
  );
}