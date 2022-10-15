import React from 'react'
type featureProps = {
    features: item[]
}

type item = {
    id: number,
    title: string,
    des: string,
    image:string  
}

type itemprops = {
    itemProp:item
}




const Feature = ({itemProp}:itemprops) => {
    return (
        <article className="w-full md:w-1/4 lg:w-1/5">
            <div className="image w-full" >
                <img className='w-full h-full' style={{
                    width: "100%",
                    height: "22rem",
                    objectFit: "cover",
                    objectPosition:"buttom"
                }} src={itemProp.image} alt="" />
            </div>
            <h2 className='text-2xl text-orange py-3' style={{
                textTransform: "capitalize",
                whiteSpace:"nowrap"
            }}>{itemProp.title}</h2>
            <p className='text-black text-md'>{itemProp.des}</p>
        </article>
    )
}
const Features = ({features}:featureProps) => {
  return (
      <section className='container mx-auto flex flex-col justify-between items-start md:space-x-3 space-y-3 mt-4 md:flex-row px-2 flex-wrap w-full'>
          {features && features.map((item) => (
              <Feature itemProp={item} key={ item.id} />
          ))}
    </section>
  )
}

export default Features