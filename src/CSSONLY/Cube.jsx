import React from 'react'

const Cube = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <div style={{transformStyle : "preserve-3d"}}  className='w-[600px] aspect-square bg-white/10 flex justify-center items-center'>
        <div style={{transformStyle : "preserve-3d", transform : "rotateY(45deg) rotateX(-25deg) rotateZ(-20deg) ", backfaceVisibility : "hidden"}} className='w-[200px] aspect-square bg-white/0 relative leading-[2.5rem]'>
          <div style={{transform : "translateZ(100px)"}} className='absolute w-[250%] flex flex-col justify-start items-start  bg-red-500/0 text-[2rem] '>
          {/* <h1 className='text-[10rem] font-extrabold leading-[10rem] bg-yellow-400/0'>ENSERTYUIYI</h1> */}
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima suscipit ducimus ea a, qui dolorum iure totam amet rerum! Praesentium reprehenderit pariatur, sint iure labore earum! Doloribus quia porro inventore.</p>
          </div>
          <div style={{transform : "translateX(360px) rotateY(90deg)", backfaceVisibility : "hidden"}} className='absolute flex justify-start items-start h-full bg-yellow-500/0'>
            {/* <h1 className='text-[10rem] font-extrabold leading-[11rem] bg-red-500/0 translate-x-[-0px]'>ENS</h1> */}
          </div>
          <div style={{transform : "translateX(-100px) rotateY(270deg)", backfaceVisibility : "hidden"}} className='absolute flex justify-start items-start w-full overflow-hidden h-full bg-green-500/0 text-[2rem]'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate laboriosam doloremque, ullam sunt hic earum. Adipisci ex omnis quia eveniet, a sint dolores deleniti? Reprehenderit sint earum dicta. Hic.</p>
          </div>
          <div style={{transform : "translateZ(-100px) rotateY(180deg)", backfaceVisibility : "hidden"}} className='absolute flex justify-center items-center w-full h-full bg-pink-500/0'>
            {/* <h1 className='text-[10rem] font-extrabold font-sayeed'>ENSA</h1> */}
          </div>
          <div style={{transform : "translateY(-100px) rotateX(90deg)", backfaceVisibility : "hidden"}} className='absolute w-[300%] h-full bg-violet-500/0 flex flex-col justify-start items-start text-[2rem]'>
            {/* <h1 className='text-[10rem] font-extrabold bg-red-500/0 leading-[7rem] translate-x-[-0px]'>ENSAFRYHDE</h1> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem, provident sed magni velit inventore iure libero impedit illum obcaecati at porro maxime molestias ipsa quaerat officia, amet, suscipit quam! amet,   suscipit quam! amet, suscipit quam! amet, suscipit quam! suscipit quam! amet, suscipit quam! amet, suscipit quam!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cube


// import React, { useState, useRef, useEffect } from 'react';

// const TextHeightFitting = () => {
//   const [text, setText] = useState('This is some sample text that needs to fit within its container height properly.');
//   const [containerHeight, setContainerHeight] = useState(150);
//   const textRef = useRef(null);
//   const [fontSize, setFontSize] = useState(16);
  
//   // Auto-adjust font size to fit container
//   useEffect(() => {
//     if (!textRef.current) return;
    
//     const container = textRef.current;
//     const style = window.getComputedStyle(container);
//     const lineHeight = parseFloat(style.lineHeight) || parseInt(style.fontSize) * 1.2;
//     const maxLines = Math.floor(containerHeight / lineHeight);
    
//     if (container.scrollHeight > containerHeight) {
//       // Text overflows, reduce font size
//       const newFontSize = parseInt(style.fontSize) - 1;
//       if (newFontSize > 8) setFontSize(newFontSize);
//     } else if (maxLines > 1 && container.scrollHeight < containerHeight * 0.8) {
//       // Text has much space, increase font size (with limits)
//       const newFontSize = parseInt(style.fontSize) + 1;
//       if (newFontSize < 40) setFontSize(newFontSize);
//     }
//   }, [text, containerHeight]);

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1>Text Height Fitting Solutions</h1>
      
//       <div style={{ marginBottom: '20px' }}>
//         <label style={{ display: 'block', marginBottom: '8px' }}>
//           Text Content:
//           <textarea 
//             value={text} 
//             onChange={(e) => setText(e.target.value)}
//             style={{ width: '100%', minHeight: '60px', marginTop: '5px' }}
//           />
//         </label>
        
//         <label style={{ display: 'block', marginTop: '15px' }}>
//           Container Height: {containerHeight}px
//           <input 
//             type="range" 
//             min="50" 
//             max="300" 
//             value={containerHeight} 
//             onChange={(e) => setContainerHeight(parseInt(e.target.value))}
//             style={{ width: '100%', marginTop: '5px' }}
//           />
//         </label>
//       </div>
      
//       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
//         {/* Solution 1: CSS Overflow */}
//         <div>
//           <h3>1. CSS Overflow Control</h3>
//           <div 
//             style={{ 
//               height: `${containerHeight}px`, 
//               border: '2px solid #3498db',
//               borderRadius: '5px',
//               padding: '10px',
//               overflow: 'auto'
//             }}
//           >
//             {text}
//           </div>
//           <p style={{ fontSize: '14px', color: '#666' }}>
//             Uses <code>overflow: auto</code> to add scrollbars when content overflows.
//           </p>
//         </div>
        
//         {/* Solution 2: Auto Font Size Adjustment */}
//         <div>
//           <h3>2. Auto Font Size Adjustment</h3>
//           <div 
//             ref={textRef}
//             style={{ 
//               height: `${containerHeight}px`, 
//               border: '2px solid #2ecc71',
//               borderRadius: '5px',
//               padding: '10px',
//               fontSize: `${fontSize}px`,
//               overflow: 'hidden'
//             }}
//           >
//             {text}
//           </div>
//           <p style={{ fontSize: '14px', color: '#666' }}>
//             Automatically adjusts font size to fit content within container.
//           </p>
//         </div>
        
//         {/* Solution 3: CSS Line Clamp */}
//         <div>
//           <h3>3. CSS Line Clamp (Truncation)</h3>
//           <div 
//             style={{ 
//               height: `${containerHeight}px`, 
//               border: '2px solid #e74c3c',
//               borderRadius: '5px',
//               padding: '10px',
//               display: '-webkit-box',
//               WebkitBoxOrient: 'vertical',
//               overflow: 'hidden',
//               lineHeight: '1.4'
//             }}
//           >
//             {text}
//           </div>
//           <p style={{ fontSize: '14px', color: '#666' }}>
//             Uses CSS to truncate text with ellipsis when it overflows.
//           </p>
//         </div>
        
//         {/* Solution 4: Flexbox Centering */}
//         <div>
//           <h3>4. Flexbox Vertical Centering</h3>
//           <div 
//             style={{ 
//               height: `${containerHeight}px`, 
//               border: '2px solid #f39c12',
//               borderRadius: '5px',
//               padding: '10px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               textAlign: 'center',
//               overflow: 'auto'
//             }}
//           >
//             {text}
//           </div>
//           <p style={{ fontSize: '14px', color: '#666' }}>
//             Uses Flexbox to center text vertically within the container.
//           </p>
//         </div>
//       </div>
      
//       <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
//         <h3>When to Use Each Approach:</h3>
//         <ul>
//           <li><strong>Overflow Control</strong>: When you want users to access all content via scrolling</li>
//           <li><strong>Auto Font Size</strong>: When you need all text visible without scrolling or truncation</li>
//           <li><strong>Line Clamp</strong>: When you want to truncate text with an ellipsis</li>
//           <li><strong>Flexbox Centering</strong>: When you want to vertically center text within a container</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TextHeightFitting;