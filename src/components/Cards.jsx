import React from 'react'

function Cards({ images, onLoading }) {
    return (
        <>
            {onLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : images.map(image => <div key={image.id} className=" dark:border-gray-700 max-w-sm rounded overflow-hidden shadow-lg">
                <img className=' w-full' src={image.webformatURL} alt="" />
                <div className="dark:bg-gray-700 dark:text-white px-6 py-4">
                    <div className="font-bold text-purple-500 text-xl mb-2">
                        Photo by {image.user}
                    </div>
                    <ul>
                        <li>
                            <strong>Views: </strong>
                            {image.views}
                        </li>
                        <li>
                            <strong>Downloads: </strong>
                            {image.downloads}
                        </li>
                        <li>
                            <strong>Likes: </strong>
                            {image.likes}
                        </li>
                    </ul>
                </div>
                <div className="px-6 pt-4 pb-2 dark:bg-gray-700 dark:text-white">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Intertain</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>)}
        </>
    )
}

export default Cards