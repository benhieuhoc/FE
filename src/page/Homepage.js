import Layoutmain from "../component/layout/Layoutmain";

const HomePage = () => {


    return(
        <div style={{width: 1440, height: 1024, position: 'relative', background: 'white'}}>
  <div style={{width: 315, height: 953, left: 10, top: 40, position: 'absolute', background: '#D9D9D9', boxShadow: '10px 0px 20.700000762939453px rgba(0, 0, 0, 0.57)', borderRadius: 59}} />
  <div style={{width: 65, height: 1051, left: 376, top: 89, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: 'top left', background: '#D9D9D9', borderRadius: 14}} />
  <div style={{width: 358, height: 346, left: 376, top: 114, position: 'absolute', background: '#D9D9D9', boxShadow: '-11px 11px 14.100000381469727px rgba(0, 0, 0, 0.54)', borderRadius: 54}} />
  <div style={{width: 358, height: 473, left: 376, top: 512, position: 'absolute', background: '#D9D9D9', boxShadow: '-11px 11px 14.100000381469727px rgba(0, 0, 0, 0.54)', borderRadius: 58}} />
  <div style={{width: 441, height: 473, left: 767, top: 512, position: 'absolute', background: '#D9D9D9', boxShadow: '11px 11px 14.100000381469727px rgba(0, 0, 0, 0.54)', borderRadius: 43}} />
  <div style={{width: 441, height: 346, left: 767, top: 114, position: 'absolute', background: '#D9D9D9', boxShadow: '11px 11px 14.100000381469727px rgba(0, 0, 0, 0.54)', borderRadius: 53}} />
  <div style={{width: 190, height: 354, left: 1231, top: 303, position: 'absolute', background: '#D9D9D9', boxShadow: '12px 0px 14.5px 3px rgba(0, 0, 0, 0.41)', borderRadius: 54}} />
  <div style={{width: 150, height: 42, left: 407, top: 40, position: 'absolute', background: '#6D8B74', boxShadow: '-4px -4px 4px rgba(0, 0, 0, 0.48)', borderRadius: 12}} />
  <div style={{width: 154, height: 40, left: 1135, top: 40, position: 'absolute', background: '#6D8B74', boxShadow: '4px -4px 4px rgba(0, 0, 0, 0.62)', borderRadius: 10}} />
  <div style={{width: 133, height: 29, left: 424, top: 37, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Search</div>
  <div style={{width: 133, height: 29, left: 1176, top: 46, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>New task<br/></div>
  <div style={{width: 265, height: 594, left: 111, top: 348, position: 'absolute'}}>
    <div style={{width: 102, height: 26, left: 0, top: 0, position: 'absolute', color: '#543A3A', fontSize: 16, fontFamily: 'Inknut Antiqua', fontWeight: '400', wordWrap: 'break-word'}}>Manager</div>
    <div style={{width: 102, height: 26, left: 0, top: 63, position: 'absolute', color: '#543A3A', fontSize: 16, fontFamily: 'Inknut Antiqua', fontWeight: '400', wordWrap: 'break-word'}}>Result</div>
    <div style={{width: 102, height: 26, left: 0, top: 135, position: 'absolute', color: '#543A3A', fontSize: 16, fontFamily: 'Inknut Antiqua', fontWeight: '400', wordWrap: 'break-word'}}>Project</div>
    <div style={{width: 129, height: 26, left: 0, top: 202, position: 'absolute', color: '#543A3A', fontSize: 16, fontFamily: 'Inknut Antiqua', fontWeight: '400', wordWrap: 'break-word'}}>Notilication</div>
    <div style={{width: 102, height: 26, left: 0, top: 287, position: 'absolute', color: '#543A3A', fontSize: 16, fontFamily: 'Inknut Antiqua', fontWeight: '400', wordWrap: 'break-word'}}>Chat</div>
    <div style={{width: 248, height: 34, left: 17, top: 560, position: 'absolute', color: '#543A3A', fontSize: 40, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Log out</div>
  </div>
  <div style={{width: 158, height: 33.96, left: 1263, top: 951, position: 'absolute'}}>
    <div style={{width: 102, height: 26, left: 56, top: 0, position: 'absolute', color: '#6D8B74', fontSize: 16, fontFamily: 'Inknut Antiqua', fontWeight: '400', wordWrap: 'break-word'}}>Setting</div>
    <div data-svg-wrapper style={{left: 0, top: 7, position: 'absolute'}}>
    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.769 13.4922C22.769 13.0392 22.6692 12.3695 22.5893 11.8377C22.5094 11.365 22.749 10.8726 23.1684 10.6362L24.8856 9.67108C25.4646 9.33624 25.6444 8.62714 25.3249 8.05594L23.8073 5.45602C23.4679 4.88482 22.749 4.70751 22.17 5.02266L19.7339 6.40142C18.7555 5.45598 17.5774 4.70751 16.2596 4.21509C15.7803 4.03782 15.4609 3.62421 15.4609 3.1318C15.4609 2.56059 15.4609 1.81211 15.4609 1.18181C15.4609 0.531823 14.9217 0 14.2628 0H11.2277C10.5688 0 10.0297 0.531823 10.0297 1.18181V3.19088C10.0297 3.64391 9.77009 4.05752 9.35077 4.25449C8.55206 4.60903 7.25417 5.25902 6.33566 5.90901C5.95627 6.18476 5.43712 6.22417 5.03776 5.98781L3.32055 5.00298C2.74149 4.66813 2.02265 4.8651 1.6832 5.43631L0.165665 8.03628C-0.173785 8.60749 0.0258919 9.31652 0.604953 9.65137L3.041 11.0302C2.84133 11.818 2.74149 12.6256 2.74149 13.4725C2.74149 14.024 2.78142 14.5952 2.88126 15.127C2.96113 15.5998 2.76146 16.0922 2.34214 16.3286L0.62492 17.3134C0.0458591 17.6482 -0.133849 18.3573 0.185633 18.9285L1.70317 21.5285C2.04262 22.0997 2.76146 22.2769 3.34052 21.9618L5.05773 20.977C5.47705 20.7406 6.01618 20.7997 6.39556 21.1149C7.45385 21.9815 8.69184 22.6315 10.0696 23.0057V25.783C10.0696 26.4329 10.6087 26.9648 11.2677 26.9648H14.3027C14.9617 26.9648 15.5008 26.4329 15.5008 25.783C15.5008 25.1527 15.5008 24.4042 15.5008 23.833C15.5008 23.3406 15.8402 22.927 16.2995 22.7497C17.3578 22.3558 18.3162 21.8042 19.1549 21.1149C19.5343 20.7997 20.0534 20.7406 20.4927 20.977L22.2099 21.9618C22.789 22.2966 23.5078 22.0997 23.8473 21.5285L25.3648 18.9285C25.7042 18.3573 25.5046 17.6482 24.9255 17.3134L23.2083 16.3286C22.789 16.0922 22.5893 15.5998 22.6692 15.127C22.769 14.5952 22.8089 14.0437 22.8089 13.4725L22.769 13.4922ZM12.7453 17.2346C10.6487 17.2346 8.95142 15.5604 8.95142 13.4922C8.95142 11.4241 10.6487 9.74988 12.7453 9.74988C14.8419 9.74988 16.5391 11.4241 16.5391 13.4922C16.5391 15.5604 14.8419 17.2346 12.7453 17.2346Z" fill="#6D8B74"/>
    </svg>
    </div>
  </div>
  <div data-svg-wrapper style={{left: 46, top: 356, position: 'absolute'}}>
  <svg width="37" height="526" viewBox="0 0 37 526" fill="none" xmlns="http://www.w3.org/2000/svg">
  </svg>
  </div>
  <div style={{width: 357, height: 0, left: 377, top: 202, position: 'absolute', border: '1px #454545 solid'}}></div>
  <div style={{width: 357, height: 0, left: 376, top: 621, position: 'absolute', border: '1px #454545 solid'}}></div>
  <div style={{width: 315, height: 0, left: 10, top: 893, position: 'absolute', border: '1px #454545 solid'}}></div>
  <div style={{width: 441, height: 0, left: 767, top: 202, position: 'absolute', border: '1px #454545 solid'}}></div>
  <div style={{width: 190, height: 0, left: 1231, top: 394, position: 'absolute', border: '1px #454545 solid'}}></div>
  <div style={{width: 190, height: 0, left: 1231, top: 501, position: 'absolute', border: '1px #454545 solid'}}></div>
  <div style={{width: 190, height: 0, left: 1231, top: 600, position: 'absolute', border: '1px #454545 solid'}}></div>
  <div style={{width: 441, height: 0, left: 767, top: 621, position: 'absolute', border: '1px #454545 solid'}}></div>
  <div style={{width: 306, height: 58, left: 407, top: 134, position: 'absolute'}}>
    <div style={{width: 299, height: 58, left: 0, top: 0, position: 'absolute', background: '#6D8B74', borderRadius: 20}} />
    <div style={{width: 248, height: 34, left: 58, top: 5, position: 'absolute', color: 'white', fontSize: 40, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word', textShadow: '3px 4px 4px rgba(0, 0, 0, 0.90)'}}>Timeline</div>
  </div>
  <div style={{width: 329, height: 58, left: 841, top: 134, position: 'absolute'}}>
    <div style={{width: 299, height: 58, left: 0, top: 0, position: 'absolute', background: '#6D8B74', borderRadius: 20}} />
    <div style={{width: 248, height: 34, left: 81, top: 5, position: 'absolute', color: 'white', fontSize: 40, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word', textShadow: '3px 4px 4px rgba(0, 0, 0, 0.90)'}}>Result</div>
  </div>
  <div style={{width: 310, height: 58, left: 841, top: 544, position: 'absolute'}}>
    <div style={{width: 299, height: 58, left: 0, top: 0, position: 'absolute', background: '#6D8B74', boxShadow: '0px 12px 12.199999809265137px rgba(0, 0, 0, 0.46) inset', borderRadius: 20}} />
    <div style={{width: 248, height: 34, left: 62, top: 5, position: 'absolute', color: 'white', fontSize: 40, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word', textShadow: '3px 4px 4px rgba(0, 0, 0, 0.90)'}}>Deadlines</div>
  </div>
  <div style={{width: 306, height: 58, left: 403, top: 544, position: 'absolute'}}>
    <div style={{width: 299, height: 58, left: 0, top: 0, position: 'absolute', background: '#6D8B74', boxShadow: '0px 4px 12.199999809265137px rgba(0, 0, 0, 0.37) inset', borderRadius: 20}} />
    <div style={{width: 248, height: 34, left: 58, top: 5, position: 'absolute', color: 'white', fontSize: 40, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word', textShadow: '3px 3px 4px rgba(0, 0, 0, 0.90)'}}>Human</div>
  </div>
  <div style={{width: 23, height: 23, left: 1145, top: 50, position: 'absolute'}}>
    <div style={{width: 23, height: 0, left: 9, top: 0, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: 'top left', border: '4px white solid'}}></div>
    <div style={{width: 23, height: 0, left: 23, top: 9, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: 'top left', border: '4px white solid'}}></div>
  </div>
  
  <div style={{width: 124, height: 61, left: 1282, top: 332, position: 'absolute', background: '#D9D9D9'}} />
  <div style={{width: 36, height: 40, left: 55, top: 912, position: 'absolute'}}>
</div>
  <div style={{width: 225, height: 236, left: 52, top: 67, position: 'absolute', background: '#4D4646', borderRadius: 43}} />
</div>
    )
}

export default HomePage;