// Custom Scripts

document.addEventListener("DOMContentLoaded", function () {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        // Check if the added node is the `form-embed` element
        if (node.id === "app-embed" && node.shadowRoot) {
          console.log("Shadow root found:", node.shadowRoot);

          // Access an element inside the shadow root
          const shadowRootElement = node.shadowRoot.querySelector("._formContainer_stahb_30");
          if (shadowRootElement) {
            // Add a custom class to the shadow root element
            shadowRootElement.classList.add("sb-custom-style");
            console.log("Class 'custom-style' added to shadow root element");

            // Inject a <style> tag into the Shadow DOM with the styles for the class
            const style = document.createElement("style");
            style.textContent = `
              .sb-custom-style {
                max-width: 98% !important;
                margin: 0;
                padding: 20px;                
              }

              .sb-custom-style ._gridItemContent_stahb_257 {
                border: 1px solid rgba(119, 93, 71, 0.5);
                border-radius: 7px;
                padding: 40px 40px 0 40px;
              }

              div._formDisclaimer_1ll8d_37 {
                padding: 40px 0 10px 0 !important;
              }
            
              .sb-custom-style ._formFieldContainer_1ydxd_5 {
                border: 1px solid rgba(119, 93, 71, 0.5);
                border-radius: 7px;
              }
              
              h2._textHeading_2aowh_35 {              
                position: absolute;
                top: 8px;
                left: 51px;
                background: white;
                padding: 0 10px;
              }

            ._textBody_2aowh_10 {
              text-align: left;
              max-width: 800px;
            }

            form._formFieldset_1ll8d_67 {
                display: grid !important;
                grid-template-columns: repeat(4, 1fr); 
                row-gap: 24px !important;
                column-gap: 24px !important;
                max-width: 800px;
            }
            
          form._formFieldset_1ll8d_67 > *:nth-child(n+13):nth-child(-n+15) ._textBody_2aowh_10 {
              visibility: hidden;
            }                     

            form._formFieldset_1ll8d_67 > *:nth-child(-n+8) {
                grid-column: span 2; /* Each item takes 1 column in the 2-column grid */
            }

            form._formFieldset_1ll8d_67 > *:nth-child(n+9):nth-child(-n+11) {
                grid-column: span 4; /* Span across both columns */
            }

            form._formFieldset_1ll8d_67 > *:nth-child(n+12):nth-child(-n+15) {
                grid-column: span 1; /* Each item takes 1 column in a 4-column grid */
            }

            @media screen and (max-width: 768px) {
                form._formFieldset_1ll8d_67 > *:nth-child(n+12):nth-child(-n+15) {
                    grid-column: span 2; 
                }
            }

            @media screen and (max-width: 480px) {
                form._formFieldset_1ll8d_67 > *:nth-child(n+12):nth-child(-n+15) {
                    grid-column: span 4;
                }
            }
            /* Last child (16): Single row, full width */
            form._formFieldset_1ll8d_67 > *:last-child {
                grid-column: span 2; /* Span across both columns */
                margin-top: 20px;
            }            

            `;

            node.shadowRoot.querySelectorAll('._formFileInputButton_ehvsf_18').forEach((element) => {
              element.textContent = "";
              element.insertAdjacentHTML("beforeend", "+"); // Add the "+" symbol
              element.style.backgroundColor = "transparent";
              element.style.fontSize = "60px";
              element.style.opacity = 0.5;
            });

            node.shadowRoot.appendChild(style);
            console.log("Styles injected into Shadow DOM");
          }

          observer.disconnect(); // Stop observing after applying styles
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
});


document.addEventListener("DOMContentLoaded", function () {

  class NewCartDrawer extends CartDrawer {


  }

  const newCartDrawer = NewCartDrawer();

  console.log(newCartDrawer);

});