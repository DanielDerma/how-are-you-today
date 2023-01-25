import Image from "next/image"
import two from '/public/two.svg'

const Tooltip = () => {
  return (
    <div className="outline px-2 rounded-full flex items-center">
      <Image
        src={two}
        alt="two"
        width={20}
        height={20}
      />
      <p className="ml-1">Hola</p>
    </div>
  )
}

export default Tooltip