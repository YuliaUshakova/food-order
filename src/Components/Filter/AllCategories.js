import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div>
            <p>What kind of food to you like?</p>
            {['SEAFOOD', 'ITALIAN', 'APPRTIZERS', 'SALADS', 'ALL'].map(category => <Filter category={category}/>
            )}
        </div>)
}

export default AllCategories;