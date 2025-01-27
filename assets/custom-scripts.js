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

                // Monitor and handle output elements
                const form = shadowRootElement.querySelector("form");
                if (form) {
                  const formObserver = new MutationObserver(() => {
                    form.querySelectorAll("output").forEach((outputElement) => {
                      const errorMessage = outputElement.textContent.trim();

                      if (errorMessage) {
                        // Locate the related input or textarea
                        const relatedInput = form.querySelector(
                          `[aria-labelledby="${outputElement.previousElementSibling?.id}"]`
                        ) || outputElement.previousElementSibling;

                        if (relatedInput) {
                          const parentDiv = relatedInput.closest("div");

                          if (parentDiv) {
                            // Find or create the .error-message div
                            let errorElement = parentDiv.querySelector(".error-message");
                            if (!errorElement) {
                              errorElement = document.createElement("div");
                              errorElement.className = "error-message";
                              errorElement.style.color = "red";
                              errorElement.style.marginTop = "8px";
                              parentDiv.appendChild(errorElement);
                            }

                            // Move the output element into the error-message div
                            errorElement.innerHTML = ""; // Clear existing content
                            errorElement.appendChild(outputElement); // Append the output element
                          }
                        }
                      }
                    });
                  });

                  formObserver.observe(form, { childList: true, subtree: true });

                  form.addEventListener("submit", (event) => {
                    event.preventDefault();
                    let isValid = true;

                    form.querySelectorAll("input, textarea").forEach((input) => {
                      const parentDiv = input.closest("div");
                      let errorElement = parentDiv.querySelector(".error-message");

                      if (!input.value.trim()) {
                        isValid = false;

                        if (!errorElement) {
                          errorElement = document.createElement("div");
                          errorElement.className = "error-message";
                          errorElement.style.color = "red";
                          errorElement.style.marginTop = "8px";
                          parentDiv.appendChild(errorElement);
                        }
                      }
                    });

                    if (isValid) {
                      console.log("Form submitted successfully!");
                      form.submit();
                    }
                  });

                  // Ensure file input styles remain intact
                  node.shadowRoot
                    .querySelectorAll("._formFileInputButton_ehvsf_18")
                    .forEach((element) => {
                      element.textContent = "";
                      element.insertAdjacentHTML("beforeend", "+");
                      element.style.backgroundColor = "transparent";
                      element.style.fontSize = "60px";
                      element.style.opacity = 0.5;
                    });

                  // File input change handler
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

                                const parent = fileInput.parentElement;
                                if (parent) {
                                  const existingPreview =
                                    parent.querySelector(".image-preview");
                                  if (existingPreview) {
                                    existingPreview.src = e.target.result;
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
              }
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

  .error-message {
    color: red;
    font-size: 12px;
    font-weight: 400;
    margin-top: 4px;
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
  display: flex !important;
  flex-wrap: wrap; /* Allow items to wrap */
  flex-direction: row !important; /* Items flow in a row */
  gap: 24px !important; /* Unified spacing for rows and columns */
  width: 100%;
  padding-right: 25px;
}

/* First 6 divs: Two columns (50% width each) */
form._formFieldset_1ll8d_67 > *:nth-child(-n+6) {
  flex: 1 1 calc(50% - 24px);
}

/* Next 3 divs: Three columns (33.33% width each) */
form._formFieldset_1ll8d_67 > *:nth-child(n+7):nth-child(-n+9) {
  flex: 1 1 calc(33.333% - 24px);
}

/* Next 4 divs: Two columns (50% width each) */
form._formFieldset_1ll8d_67 > *:nth-child(n+10):nth-child(-n+13) {
  flex: 1 1 calc(50% - 24px);
}

/* Next 4 divs: Four columns (25% width each) */
form._formFieldset_1ll8d_67 > *:nth-child(n+14):nth-child(-n+17) {
  flex: 1 1 calc(25% - 24px);
}

form._formFieldset_1ll8d_67 > *:nth-child(n+14):nth-child(-n+17) button {
  width: 100%;
  border-width: 2px;
}

/* Last 2 divs: Two columns (50% width each) */
form._formFieldset_1ll8d_67 > *:nth-child(n+18):nth-child(-n+19) {
  flex: 1 1 calc(50% - 24px);
}

/* Last 2 divs: Two columns (50% width each) */
form._formFieldset_1ll8d_67 > *:nth-child(20) {
  flex: 1 1 calc(100% - 24px);
}

/* Last div: 25% width */
form._formFieldset_1ll8d_67 > *:last-child {
  flex: 0 0 calc(50% - 24px);
}


form._formFieldset_1ll8d_67 > *:nth-last-child(-n+4) input[id="custom#e-signature"] {
    margin-top: 25px;
  }
  
  form._formFieldset_1ll8d_67 input,  
  form._formFieldset_1ll8d_67 textarea {
    width: 100%;
    height: fit-content;
}


  ._formFieldContainer_1ydxd_5 {    
    flex-direction: row !important;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  form._formFieldset_1ll8d_67 > *:nth-last-child(-n+4) label[for="label-custom#e-signature"] {
    margin-top: 25px;
  }

  form._formFieldset_1ll8d_67 button._formFileInputField_ehvsf_5  {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    gap: 10px;
    overflow: hidden;
    width: 100%;
    height: 220px;
    padding: 10px;
  }

  form._formFieldset_1ll8d_67 ._selectContainer_1yit2_6 button {
    padding-right: 0px;
  }
  form._formFieldset_1ll8d_67 ._selectToggleText_1yit2_25 {
    padding: 0;
    margin: -7px -5px;
  }
   form._formFieldset_1ll8d_67 ._selectToggleText_1yit2_25 img {
    width: 32px;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
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

      form._formFieldset_1ll8d_67 > *:nth-child(n+7) {
          grid-column: span 4;
      }

      form._formFieldset_1ll8d_67 > *:nth-child(11) {
          grid-column: span 4;
      }

      form._formFieldset_1ll8d_67 button._formFileInputField_ehvsf_5  {
        width: 100%;
      }
      
      /* Next 4 divs: Four columns (25% width each) */
      form._formFieldset_1ll8d_67 > *:nth-child(n+14):nth-child(-n+17) {
        flex: 1 1 calc(50% - 24px);
      }

      form._formFieldset_1ll8d_67 > *:nth-last-child(-n+4) label[for="label-custom#e-signature"] {
        top: 15px;
      }
  }

    @media screen and (max-width: 768px) {
      form._formFieldset_1ll8d_67 {      
        gap: 18px !important;
      }
      form._formFieldset_1ll8d_67 {
        max-width: 580px;
      }
      form._formFieldset_1ll8d_67 > *:nth-child(n+7) {
          grid-column: span 2; 
      }

      form._formFieldset_1ll8d_67 > *:nth-child(10),
      form._formFieldset_1ll8d_67 > *:nth-child(11) {
          grid-column: span 4;
      }
  }

  @media screen and (max-width: 680px) {
    form._formFieldset_1ll8d_67 > * {
      flex: 1 1 100% !important;
    }
  }

  @media screen and (max-width: 480px) {
    form._formFieldset_1ll8d_67 {
        max-width: 100%;
      }
      
      form._formFieldset_1ll8d_67 button > div {
        justify-content: center;
      }
  }

  /* Last child (16): Single row, full width */
  form._formFieldset_1ll8d_67 > *:last-child {   
      margin-top: 20px;
  }
`;

applyCustomStylesToForm("281463", customStyles_281463);
applyCustomStylesToForm("281471", customStyles);
