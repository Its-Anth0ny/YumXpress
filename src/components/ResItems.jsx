const ResItems = ({ data }) => {
    console.log("ResItems");
    console.log(data);
    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <span>{item.card?.info?.name}</span>
                </div>
            ))}
        </div>
    );
};
export default ResItems;
