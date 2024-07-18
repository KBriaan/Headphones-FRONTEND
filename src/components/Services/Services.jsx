import { UpdateFollower } from "react-mouse-follower";
import Icon1 from "../../assets/icons/obj1.png";
import Icon2 from "../../assets/icons/obj2.png";
import Icon3 from "../../assets/icons/obj3.png";

const ServiceData = [
  {
    id: 1,
    title: "Security",
    icon: Icon1,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ut quas cum perferendis veritatis omnis esse quibusdam maiores repellendus tempore.",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Gurantee",
    icon: Icon2,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ut quas cum perferendis veritatis omnis esse quibusdam maiores repellendus tempore.",
    delay: 0.8,
  },
  {
    id: 3,
    title: "Affordability",
    icon: Icon3,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ut quas cum perferendis veritatis omnis esse quibusdam maiores repellendus tempore.",
    delay: 1.1,
  },
];
const Services = () => {
  return (
    <>
      <section className="bg-gray-300 font-poppins py-8">
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center pb-10 ">Services</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ServiceData.map((data) => (
              <UpdateFollower key={data.id}>
                <div className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg">
                  <img src={data.icon} className="w-[100px] mb-4"></img>
                </div>
                <div className="text-center">
                  <h1 className="text-2xl font-bold">{data.title}</h1>
                  <p className="text-center text-sm text-black/75">
                    {data.desc}
                  </p>
                </div>
              </UpdateFollower>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
