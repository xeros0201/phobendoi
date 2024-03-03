import { twMerge } from "tailwind-merge"

export default function Loading(
    {className}:
    {
        className?: string
    }
) {
    
    return <div className={twMerge("relative  items-center opacity-70 block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700",className)}>
    <svg width="247" height="154" viewBox="0 0 247 154" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M120.515 31.622H91.3672V61.0145H120.515V31.622Z" fill="#FFDD00"/>
<path d="M134.937 0.632812H16.8161H0V17.5902V136.703V153.661H16.8161H79.1459V136.703H16.8161V17.5902H134.937V75.5477L151.753 92.7614V17.5902V0.632812H134.937Z" fill="#FFDD00"/>
<path d="M38.9688 102.65H48.0916C54.2441 102.65 57.1403 105.72 57.1403 111.23C57.1403 116.74 54.1382 119.954 47.6945 119.954H44.0358V129.084H38.9688V102.65ZM44.0358 106.633V115.928H47.2127C50.5801 115.928 51.978 114.065 51.978 111.219C51.978 108.373 50.6013 106.622 47.668 106.622L44.0358 106.633Z" fill="white"/>
<path d="M74.3005 117.621H63.9493V129.084H58.8398V102.65H63.9493V113.387H74.3005V102.65H79.4047V129.084H74.3005V117.621Z" fill="white"/>
<path d="M81.9531 115.864C81.9531 108.309 84.6005 102.068 93.4321 102.068C102.555 102.068 104.906 108.309 104.906 115.864C104.906 123.419 102.258 129.666 93.4321 129.666C84.3305 129.666 81.9531 123.403 81.9531 115.864ZM99.6217 115.864C99.6217 109.916 97.8109 106.414 93.4321 106.414C89.0534 106.414 87.2373 109.916 87.2373 115.864C87.2373 121.812 89.0481 125.32 93.4321 125.32C97.8162 125.32 99.6429 121.801 99.6429 115.864H99.6217ZM91.1501 95.8634H95.7195L99.5529 100.898H95.9366L93.4374 98.2714L90.9542 100.898H87.3326L91.1501 95.8634ZM101.057 92.9695H106.595L101.957 98.0044H98.3669L101.057 92.9695Z" fill="white"/>
<path d="M114.049 102.65H122.918C128.742 102.65 131.532 105.17 131.532 109.623C131.532 112.399 130.447 114.188 128.567 115.282C129.865 115.806 130.969 116.723 131.728 117.907C132.487 119.092 132.862 120.484 132.803 121.892C132.803 126.164 130.155 129.084 123.749 129.084H114.049V102.65ZM119.19 106.777V113.718H122.303C125.237 113.718 126.285 112.367 126.285 110.066C126.285 108.096 125.163 106.782 122.579 106.782L119.19 106.777ZM119.19 117.584V125.005H123.643C126.428 125.005 127.55 123.617 127.55 121.465C127.55 119.201 126.354 117.594 123.209 117.594L119.19 117.584Z" fill="white"/>
<path d="M135.223 102.649H151.769V106.883H140.332V113.419H150.175V117.653H140.332V124.845H151.917V129.084H135.223V102.649ZM141.306 95.1318H145.833L149.672 100.898H146.05L143.551 97.9028L141.089 100.898H137.468L141.306 95.1318Z" fill="white"/>
<path d="M187.01 113.857H189.255V102.644H198.526C207.649 102.644 210.54 108.304 210.54 115.859C210.54 123.414 207.363 129.079 198.526 129.079H189.255V118.24H187.01V113.857ZM194.359 106.884V113.857H199.394V118.24H194.359V124.845H198.341C202.725 124.845 205.255 121.999 205.255 115.864C205.255 109.73 202.725 106.884 198.341 106.884H194.359Z" fill="white"/>
<path d="M211.881 115.864C211.881 108.309 214.528 102.068 223.36 102.068C232.483 102.068 234.834 108.309 234.834 115.864C234.834 123.419 232.186 129.666 223.36 129.666C214.237 129.666 211.881 123.403 211.881 115.864ZM229.549 115.864C229.549 109.916 227.739 106.414 223.36 106.414C218.981 106.414 217.165 109.916 217.165 115.864C217.165 121.812 218.976 125.32 223.36 125.32C227.744 125.32 229.549 121.801 229.549 115.864ZM221.078 95.8634H225.605L229.438 100.898H225.822L223.323 98.2714L220.861 100.898H217.239L221.078 95.8634ZM233.494 97.9991H229.909L225.277 92.9695H230.815L233.494 97.9991Z" fill="white"/>
<path d="M235.882 102.65H247.001V106.74H243.972V125.005H246.974V129.095H235.855V125.005H238.863V106.74H235.855L235.882 102.65Z" fill="white"/>
<path d="M199.655 113.862H187.275V118.246H199.655V113.862Z" fill="white"/>
<path d="M175.669 102.65H170.782V113.931L159.594 102.65H154.416V129.084H159.303V113.825C159.303 112.944 159.16 111.374 158.98 109.804L170.766 121.689V129.084H175.669V102.65Z" fill="white"/>
<path d="M93.7022 136.827H97.1332L103.058 153.405H99.627L98.4516 149.833H92.2038L91.0442 153.405H87.7773L93.7022 136.827ZM93.0721 147.222H97.5885L96.1166 142.689C95.7896 141.708 95.5313 140.706 95.3435 139.689C95.1558 140.706 94.8975 141.708 94.5705 142.689L93.0721 147.222Z" fill="white"/>
<path d="M104.539 141.659H107.467L107.578 143.122C107.882 142.581 108.321 142.129 108.851 141.812C109.382 141.494 109.985 141.322 110.602 141.312C110.924 141.308 111.246 141.355 111.555 141.45V144.451C111.065 144.329 110.561 144.275 110.056 144.291C109.613 144.279 109.172 144.356 108.758 144.517C108.345 144.679 107.967 144.921 107.647 145.231V153.405H104.539V141.659Z" fill="white"/>
<path d="M112.133 141.658H113.954V138.017H117.062V141.658H120.88V144.269H117.062V149.304C117.062 150.495 117.359 151.023 118.809 151.023C119.489 151.025 120.167 150.955 120.832 150.815V153.266C119.93 153.596 118.975 153.759 118.015 153.746C114.791 153.746 113.954 152.144 113.954 149.512V144.269H112.133V141.658Z" fill="white"/>
<path d="M126.957 147.564C126.957 143.559 128.794 141.311 132.384 141.311C133.555 141.291 134.719 141.502 135.81 141.931V144.494C134.86 144.171 133.862 144.018 132.861 144.04C130.997 144.04 130.134 145.481 130.134 147.473C130.134 149.464 131.023 151.045 132.882 151.045C133.908 151.069 134.931 150.914 135.905 150.586V153.084C134.712 153.557 133.437 153.782 132.156 153.746C128.815 153.746 126.957 151.344 126.957 147.564Z" fill="white"/>
<path d="M137.018 147.542C137.018 143.9 138.765 141.29 142.842 141.29C147.019 141.29 148.666 143.9 148.666 147.515C148.666 151.13 146.919 153.767 142.842 153.767C138.654 153.767 137.018 151.167 137.018 147.542ZM145.442 147.542C145.442 145.508 144.785 143.858 142.831 143.858C140.877 143.858 140.221 145.529 140.221 147.568C140.221 149.608 140.877 151.253 142.831 151.253C144.785 151.253 145.442 149.565 145.442 147.515V147.542Z" fill="white"/>
<path d="M150.875 141.658H153.575L153.824 142.619C154.812 141.708 156.119 141.229 157.456 141.289C160.411 141.289 161.66 143.051 161.66 145.71V153.404H158.547V146.121C158.547 144.68 157.822 144.012 156.429 144.012C155.576 143.993 154.734 144.215 153.999 144.653V153.404H150.891L150.875 141.658Z" fill="white"/>
<path d="M164.551 141.658H167.256L167.505 142.619C168.493 141.708 169.8 141.229 171.137 141.289C174.087 141.289 175.336 143.051 175.336 145.71V153.404H172.228V146.121C172.228 144.68 171.503 144.012 170.11 144.012C169.257 143.992 168.414 144.214 167.68 144.653V153.404H164.551V141.658Z" fill="white"/>
<path d="M177.258 147.585C177.258 144.173 178.666 141.29 182.553 141.29C186.524 141.29 187.847 144.29 187.847 147.334C187.848 147.701 187.825 148.069 187.778 148.433H180.376C180.493 150.035 181.329 151.044 183.4 151.044C184.68 151.056 185.954 150.854 187.17 150.446V152.924C185.872 153.514 184.457 153.795 183.034 153.746C179.222 153.746 177.258 151.365 177.258 147.585ZM180.387 146.212H184.702C184.591 144.68 183.887 143.74 182.526 143.74C181.165 143.74 180.514 144.68 180.398 146.212H180.387Z" fill="white"/>
<path d="M189.055 147.563C189.055 143.559 190.892 141.311 194.482 141.311C195.653 141.293 196.816 141.503 197.908 141.931V144.493C196.956 144.172 195.956 144.018 194.953 144.04C193.089 144.04 192.226 145.481 192.226 147.473C192.226 149.464 193.116 151.045 194.974 151.045C196.001 151.069 197.024 150.913 197.998 150.585V153.084C196.805 153.557 195.53 153.782 194.249 153.746C190.892 153.746 189.055 151.344 189.055 147.563Z" fill="white"/>
<path d="M198.664 141.658H200.48V138.017H203.588V141.658H207.406V144.269H203.588V149.304C203.588 150.495 203.885 151.023 205.341 151.023C206.019 151.025 206.695 150.955 207.358 150.815V153.266C206.456 153.596 205.501 153.759 204.541 153.746C201.317 153.746 200.48 152.144 200.48 149.512V144.269H198.664V141.658Z" fill="white"/>
<path d="M208.385 152.987V150.473C209.609 150.92 210.9 151.154 212.202 151.167C213.589 151.167 214.405 150.873 214.405 150.099C214.405 149.325 213.748 149.068 212.133 148.679C209.571 148.059 208.501 147.05 208.501 144.941C208.501 142.832 209.957 141.321 213.404 141.321C214.77 141.321 216.406 141.642 217.063 142.101V144.621C215.895 144.165 214.656 143.925 213.404 143.911C212.409 143.911 211.705 144.21 211.705 144.941C211.705 145.673 212.361 145.924 213.95 146.313C216.496 146.933 217.608 147.915 217.608 150.051C217.608 152.187 215.813 153.762 212.409 153.762C210.836 153.746 209.089 153.404 208.385 152.987Z" fill="white"/>
<path d="M232.276 152.464C231.819 152.898 231.28 153.237 230.692 153.46C230.104 153.684 229.478 153.788 228.851 153.767C225.896 153.767 224.646 152.005 224.646 149.346V141.657H227.76V148.935C227.76 150.382 228.485 151.07 229.878 151.07C230.662 151.075 231.431 150.861 232.101 150.451V141.657H235.215V153.404H232.509L232.276 152.464Z" fill="white"/>
<path d="M237.57 152.988V150.473C238.796 150.916 240.086 151.147 241.388 151.156C242.77 151.156 243.59 150.863 243.59 150.089C243.59 149.314 242.913 149.031 241.324 148.663C238.756 148.044 237.692 147.035 237.692 144.926C237.692 142.817 239.143 141.306 242.595 141.306C243.956 141.306 245.592 141.626 246.248 142.085V144.605C245.083 144.15 243.845 143.909 242.595 143.895C241.594 143.895 240.89 144.194 240.89 144.926C240.89 145.657 241.552 145.908 243.14 146.298C245.682 146.917 246.794 147.9 246.794 150.035C246.794 152.171 244.999 153.746 241.594 153.746C240.022 153.746 238.275 153.404 237.57 152.988Z" fill="white"/>
</svg>
    <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span className="sr-only">Loading...</span>
    </div>
</div>
}