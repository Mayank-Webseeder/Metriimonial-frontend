const DharmshalaCard = ({ dharmshala }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg ml-20">
            <img src={dharmshala.image} alt={dharmshala.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{dharmshala.name}</h2>
                <h5 className="text-m font-semibold">{dharmshala.cast}</h5>
                <p className="text-gray-600">{dharmshala.location}</p>
                  {/* Call Button with Tailwind Styling */}
            <a 
                href={`tel:${dharmshala.phone}`} 
                className="mt-4 inline-block bg-[#762140] text-white py-2 px-4 rounded-lg hover:bg-[#762140] transition duration-300"
            >
                📞 
            </a>
            </div>
        </div>
    );
};
export default DharmshalaCard;