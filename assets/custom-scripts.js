function applyCustomStylesToForm(formId, styles) {
  document.addEventListener("DOMContentLoaded", function () {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        // Check if the mutation target has the desired `data-forms-id` attribute value
        const targetForm =
          mutation.target.getAttribute &&
          mutation.target.getAttribute("data-forms-id") === `forms-root-${formId}`;

        if (targetForm) {
          mutation.addedNodes.forEach((node) => {
            console.log("Added node:", node);

            // Check if the added node is the `form-embed` element
            if (node.id === "app-embed" && node.shadowRoot) {
              console.log("Shadow root found:", node.shadowRoot);

              // Access an element inside the shadow root
              const shadowRootElement = node.shadowRoot.querySelector(
                "._formContainer_stahb_30"
              );
              if (shadowRootElement) {
                // Add a custom class to the shadow root element
                shadowRootElement.classList.add("sb-custom-style");
                console.log(
                  "Class 'sb-custom-style' added to shadow root element"
                );

                // Inject the provided styles into the Shadow DOM
                const style = document.createElement("style");
                style.textContent = styles;
                node.shadowRoot.appendChild(style);
                console.log("Custom styles injected into Shadow DOM");

                // Modify specific shadow DOM elements
                node.shadowRoot
                  .querySelectorAll("._formFileInputButton_ehvsf_18")
                  .forEach((element) => {
                    element.textContent = "";
                    element.insertAdjacentHTML("beforeend", "+"); // Add the "+" symbol
                    element.style.backgroundColor = "transparent";
                    element.style.fontSize = "60px";
                    element.style.opacity = 0.5;
                  });
              }

              // Disconnect the observer after applying the styles
              observer.disconnect();
            }
          });
        }
      });
    });

    // Observe the document body for changes
    observer.observe(document.body, { childList: true, subtree: true });
  });
}


const customStyles = `
  .sb-custom-style {
    max-width: 98% !important;
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

// Apply custom styles to form with ID "264017"
applyCustomStylesToForm("264017", customStyles);


const customStyles_281463 = `
  .sb-custom-style {
    max-width: 98% !important;
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

  @media screen and (max-width: 1024px) {
      form._formFieldset_1ll8d_67 > *:nth-child(n+7) {
          grid-column: span 2; 
      }

      form._formFieldset_1ll8d_67 > *:nth-child(11) {
          grid-column: span 4;
      }
  }

    @media screen and (max-width: 768px) {
      form._formFieldset_1ll8d_67 {
        max-width: 580px;
      }
      form._formFieldset_1ll8d_67 > *:nth-child(n+7) {
          grid-column: span 4; 
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
  }

  /* Last child (16): Single row, full width */
  form._formFieldset_1ll8d_67 > *:last-child {
      grid-column: span 2; /* Span across both columns */
      margin-top: 20px;
  }
`;


applyCustomStylesToForm("281463", customStyles_281463);
applyCustomStylesToForm("281471", customStyles);
