import product from '../db.json';

function RecipeList() {
    return (
        <>
            <div className="w-full">
                <div className="row">
                    <div className="w-[40%]">
                        {
                            product?.items?.map((data, i) => {
                                return (
                                    <div key={i}>
                                        <p>{data?.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="w-[60%]">

                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeList;