import React from "react";

const services = () => {
  return (
    <>
      <main className=" flex items-center justify-center gap-1 lg:gap-20 xl:gap-0 xl:justify-between flex-wrap ">
        <section
          className="w-[306px] h-[325px] flex items-center  justify-center relative	 mt-5 mx-3 cursor-pointer"
          onClick={() => {
            window.location.href = `/nannyExpress`;
          }}
        >
          <div className=" w-48	h-36 rounded-2xl absolute top-0 ">
            <img
              src="../images/business/nanny.png"
              style={{ border: "1px solid #FF5E00", borderTop: "none" }}
              className="rounded-2xl 	"
            />
            <h6 className="mt-6 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap">
              Nanny Express
            </h6>
            <h6 className="mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center">
              Professional nannies for your tiny <br></br>toddlers .
            </h6>
          </div>
        </section>

        <section
          className="w-[306px] h-[325px] flex items-center justify-center relative	  mt-5 mx-3 cursor-pointer"
          onClick={() => {
            window.location.href = "/seniorExpress";
          }}
        >
          <div className=" w-48	h-36 rounded-2xl absolute top-0 ">
            <div className="service-border">
              <img
                src="../images/business/senior.png"
                style={{
                  borderLeft: "1px solid transparent",
                  borderImage: `linear-gradient(to top, #FF5E00 , transparent  ) 2`,
                  borderBottom: "1px solid #FF5E00",
                  borderRight: "1px solid transparent",
                  borderImage: `linear-gradient(to top, #FF5E00 , transparent 80% ) 2`,
                }}
                className="  rounded-2xl	"
              />
            </div>
            <h6 className="mt-6 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap">
              Senior Express
            </h6>
            <h6 className="mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center">
              Reliable & Caring nannies for elderly & <br></br>seniors.
            </h6>
          </div>
        </section>

        <section
          className="w-[306px] h-[325px] flex items-center justify-center relative	 mt-5 mx-3 cursor-pointer"
          onClick={() => {
            window.location.href = "/petExpress";
          }}
        >
          <div className=" w-48	h-36 rounded-2xl absolute top-0 ">
            <img
              src="../images/business/pet.png"
              style={{ border: "1px solid #FF5E00", borderTop: "none" }}
              className="rounded-2xl 	"
            />
            <h6 className="mt-6 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap">
              Pet Express
            </h6>
            <h6 className="mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center">
              Experienced pet sitters to look after your<br></br>pets .
            </h6>
          </div>
        </section>

        <section
          className="w-[306px] h-[325px] flex items-center justify-center relative mt-5 mx-3 cursor-pointer"
          onClick={() => {
            window.location.href = "/specialExpress";
          }}
        >
          <div className=" w-48	h-36 rounded-2xl absolute top-0 ">
            <img
              src="../images/business/special.png"
              style={{ border: "1px solid #FF5E00", borderTop: "none" }}
              className="rounded-2xl 	"
            />
            <h6 className="mt-6 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap">
              Special Express
            </h6>
            <h6 className="mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center">
              Professional caretaker for special <br></br>needs .
            </h6>
          </div>
        </section>
      </main>
    </>
  );
};

export default services;
