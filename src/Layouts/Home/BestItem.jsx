import { useLoaderData } from "react-router-dom";

const BestItem = () => {
    const chefData = useLoaderData();
    console.log(chefData);
    return (
        <div>
            <h2 className="text-3xl text-center font-semibold py-4">
                Our Best Items
            </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-10">
            
            {
                chefData.map(items=>(
                    <div className="bg-base-100 shadow-xl transition-transform duration-300  hover:scale-105" key={items.id}>
                        <img className="w-full h-52 rounded-lg px-2" src={items.image_url} alt="" />
                        <h2 className="text-2xl text-center font-semibold py-2">{items.name}</h2>
                    </div>
                ))
            }
        </div>
        </div>
    );
};

export default BestItem;