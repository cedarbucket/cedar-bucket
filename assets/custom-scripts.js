function applyCustomStylesToForm(formId, styles) {
  document.addEventListener("DOMContentLoaded", function () {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const targetForm =
          mutation.target.getAttribute &&
          mutation.target.getAttribute("data-forms-id") ===
          `forms-root-${formId}`;

        if (targetForm) {
          mutation.addedNodes.forEach((node) => {
            if (node.id === "app-embed" && node.shadowRoot) {
              const shadowRootElement = node.shadowRoot.querySelector(
                "._formContainer_stahb_30"
              );

              if (shadowRootElement) {
                shadowRootElement.classList.add("sb-custom-style");
                const style = document.createElement("style");
                style.textContent = styles;
                node.shadowRoot.appendChild(style);

                // Modify specific shadow DOM elements
                node.shadowRoot
                  .querySelectorAll("._formFileInputButton_ehvsf_18")
                  .forEach((element) => {
                    element.textContent = "";
                    element.insertAdjacentHTML("beforeend", "+");
                    element.style.backgroundColor = "transparent";
                    element.style.fontSize = "60px";
                    element.style.opacity = 0.5;
                  });

                // Track file input changes
                node.shadowRoot
                  .querySelectorAll('input[type="file"]')
                  .forEach((fileInput) => {
                    if (!fileInput.dataset.listenerAdded) {
                      fileInput.addEventListener("change", (event) => {
                        const files = event.target.files;
                        if (files.length > 0) {
                          const file = files[0];
                          if (file.type.startsWith("image/")) {
                            const reader = new FileReader();

                            reader.onload = (e) => {
                              const previewImage = document.createElement("img");
                              previewImage.src = e.target.result;
                              previewImage.alt = "Uploaded Image Preview";
                              previewImage.style.maxWidth = "100%";

                              // Append the image below the file input
                              const parent = fileInput.parentElement;
                              if (parent) {
                                const existingPreview =
                                  parent.querySelector(".image-preview");
                                if (existingPreview) {
                                  existingPreview.src = e.target.result; // Update existing preview
                                } else {
                                  previewImage.classList.add("image-preview");
                                  parent.appendChild(previewImage);
                                }
                              }
                            };

                            reader.readAsDataURL(file);
                          } else {
                            console.warn("Selected file is not an image.");
                          }
                        }
                      });

                      fileInput.dataset.listenerAdded = "true";
                    }
                  });
              }

              // Disconnect the observer after applying styles
              observer.disconnect();
            }
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  });
}


const customStyles = `
  .sb-custom-style {    
    min-width: 90% !important;
    margin: 0;
    padding: 20px;                
  }

  div._formDisclaimer_1ll8d_37 {
    padding: 40px 0 10px 0 !important;
  }

  h2._textHeading_2aowh_35 {                
    display: none;
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

  form._formFieldset_1ll8d_67 button._formFileInputField_ehvsf_5  {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    gap: 10px;
    overflow: hidden;
    width: 220px;   
    height: 220px; 
    padding: 10px;    
    }  
  
  form._formFieldset_1ll8d_67 button img {
    width: 200px;
    height: 150px;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
  form._formFieldset_1ll8d_67 button > div { 
    width: 100%;
    margin: 0;
  }

  form._formFieldset_1ll8d_67 button._formFileInputField_ehvsf_5 span {
    display: -webkit-box;     
    -webkit-line-clamp: 3;    
    -webkit-box-orient: vertical;
    overflow: hidden;            
    text-overflow: ellipsis;  
    max-width: 220px;
    display: inline-block;
    white-space: nowrap;
  }

  @media screen and (max-width: 768px) {
  ._inline_stahb_47 ._formContainer_stahb_30 {
    min-width: 90% !important;
  }
  form._formFieldset_1ll8d_67 button._formFileInputField_ehvsf_5  {
    width: 100%;
  }
      form._formFieldset_1ll8d_67 > *:nth-child(n+12):nth-child(-n+15) {
          grid-column: span 2; 
      }
  }

  @media screen and (max-width: 480px) {
    form._formFieldset_1ll8d_67 button > div {
      justify-content: center;  
    }
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

// Apply custom styles to form with ID "264017"
applyCustomStylesToForm("264017", customStyles);

const customStyles_281463 = `
  .sb-custom-style {
    max-width: 90% !important;
    margin: 0;
    padding: 20px;                
  }

  div._formDisclaimer_1ll8d_37 {
    padding: 40px 0 10px 0 !important;
  }

  h2._textHeading_2aowh_35 {                
    display: none;
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
  
  form._formFieldset_1ll8d_67 > *:nth-child(n+8) ._textBody_2aowh_10 {
      visibility: hidden;
  }                     

  form._formFieldset_1ll8d_67 > *:nth-child(-n+5) {
      grid-column: span 2;
  }
  form._formFieldset_1ll8d_67 > *:nth-child(3),
  form._formFieldset_1ll8d_67 > *:nth-child(6) {
    grid-column: span 4;
  }

  form._formFieldset_1ll8d_67 button._formFileInputField_ehvsf_5  {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    gap: 10px;
    overflow: hidden;
    width: 220px;
    height: 220px;
    padding: 10px;
    }

  form._formFieldset_1ll8d_67 button img {
    width: 200px;
    height: 150px;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
  form._formFieldset_1ll8d_67 button > div {
    width: 100%;
    margin: 0;
  }

  form._formFieldset_1ll8d_67 button._formFileInputField_ehvsf_5 span {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 220px;
    display: inline-block;
    white-space: nowrap;
  }

  @media screen and (max-width: 1024px) {
      form._formFieldset_1ll8d_67 > *:nth-child(n+7) {
          grid-column: span 2; 
      }

      form._formFieldset_1ll8d_67 > *:nth-child(11) {
          grid-column: span 2;
      }

      form._formFieldset_1ll8d_67 button._formFileInputField_ehvsf_5  {
        width: 100%;
      }
      form._formFieldset_1ll8d_67 > *:nth-child(n+12):nth-child(-n+15) {
          grid-column: span 2;
      }
  }

    @media screen and (max-width: 768px) {
      form._formFieldset_1ll8d_67 {
        max-width: 580px;
      }
      form._formFieldset_1ll8d_67 > *:nth-child(n+7) {
          grid-column: span 2; 
      }

      form._formFieldset_1ll8d_67 > *:nth-child(11) {
          grid-column: span 4;
      }
  }

  @media screen and (max-width: 480px) {
    form._formFieldset_1ll8d_67 {
        max-width: 100%;
      }
      form._formFieldset_1ll8d_67 > *:nth-child(n){
          grid-column: span 4;
      }
      form._formFieldset_1ll8d_67 button > div {
        justify-content: center;
      }
  }

  /* Last child (16): Single row, full width */
  form._formFieldset_1ll8d_67 > *:last-child {
      grid-column: span 2; /* Span across both columns */
      margin-top: 20px;
  }
`;

applyCustomStylesToForm("281463", customStyles_281463);
applyCustomStylesToForm("281471", customStyles);
