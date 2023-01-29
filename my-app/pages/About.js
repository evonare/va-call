import Link from "next/link"



export default function About(){


    return(
        <div className="bg-gray-200">
        <div className="w-full text-center">
            <h1 className="text-5xl py-32 font-semibold text-sky-900">About Us</h1>
        </div>
        <div className="flex flex-wrap px-10 py-10 h-auto">
            <div className="w-1/2">
                <div>
                    <img className="rounded" src="https://themes.webdevia.com/digitalo-creative-digital-agency-wordpress-theme/wp-content/uploads/2017/12/blog-3--1000x500.jpg" alt="Img" />
                </div>
            </div>
            <div className="w-1/2">
                <div className="px-10">
                <h1 className="text-4xl text-sky-900 font-bold">The Next Generation of the Development in Our DNA</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nobis velit recusandae a odit consequatur ad, ratione minima. Harum earum odit magnam asperiores qui dolores culpa accusamus doloribus sint maxime. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel consequatur provident aspernatur illum dignissimos eaque libero amet, dolore inventore quisquam accusamus obcaecati laborum nam explicabo a maiores cum placeat in!</p>
                </div>
            </div>
        </div>
        <div className="w-full py-10">
            <h1 className="font-bold text-6xl text-center text-sky-900">We completed +120 Project <br /> Yearly</h1>
            <p className="text-center text-lg py-3">We are fastest growing digital agency that with strong business idea and ethics. <br /> Check our info with some awesome numbers.</p>
        </div>

<div>
    <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-3xl w-full h-56 object-cover object-center mb-4" src="https://avatars.githubusercontent.com/u/82768953?v=4"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <Link href={""} class="text-gray-500">
               <img src="" alt="img" />               
              </Link>
              <Link href={""} class="ml-2 text-gray-500">
               <img src="" alt="img" />
              </Link>
              <Link href={""} class="ml-2 text-gray-500">
                <img src="" alt="img" />
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-3xl w-full h-56 object-cover object-center mb-4" src="https://avatars.githubusercontent.com/u/83128763?s=70&v=4"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <Link href={""} class="text-gray-500">
                <img src="" alt="img" />
              </Link>
              <Link href={""} class="ml-2 text-gray-500">
                <img src="" alt="img" />
              </Link>
              <Link href={""} class="ml-2 text-gray-500">
                <img src="" alt="img" />
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-3xl w-full h-56 object-cover object-center mb-4" src="https://avatars.githubusercontent.com/u/44477943?s=70&v=4"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <Link href={""} class="text-gray-500">
               <img src="" alt="img" />
                
              </Link>
              <Link href={""} class="ml-2 text-gray-500">
                               <img src="" alt="img" />

              </Link>
              <Link href={""} class="ml-2 text-gray-500">
               <img src="" alt="img" />
                
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-3xl w-full h-56 object-cover object-center mb-4" src="https://avatars.githubusercontent.com/u/28682772?v=4"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <Link href={""} class="text-gray-500">
               <img src="" alt="img" />
              
              </Link>
              <Link href={""} class="ml-2 text-gray-500">
               <img src="" alt="img" />
                
              </Link>
              <Link href={""} class="ml-2 text-gray-500">
               <img src="" alt="img" />
                
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div> 


        </div>
    )
}