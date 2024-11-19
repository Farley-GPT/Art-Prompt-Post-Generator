const artStyles = {
    "Classic & Traditional": [
        {
            name: "Realism",
            description: "Seeks to represent subject matter truthfully, without artificiality and avoiding artistic conventions",
            image: "20241118145528.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241118:realism:ec9e08e4"
        },
        {
            name: "Expressionism",
            description: "Presents the world solely from a subjective perspective, distorting it radically for emotional effect",
            image: "20241118145708.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241118:expressionism:a94cd412"
        },
        {
            name: "Cubism",
            description: "Employs geometric shapes and fragmented forms to depict objects and figures from multiple viewpoints simultaneously",
            image: "20241118145859.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241118:cubism:6a89c96d"
        },
        {
            name: "Renaissance",
            description: "Characterized by a renewed interest in classical art and learning, emphasizing realism, human anatomy, and balanced compositions",
            image: "20241118150503.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241118:renaissance:50beb146"
        },
        {
            name: "Baroque",
            description: "Known for its drama, grandeur, ornate detail, rich color, and emotional intensity",
            image: "20241118152034.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241118:baroque:7aa58640"
        },
        {
            name: "Byzantine",
            description: "Highly stylized religious art with flattened figures, gold backgrounds, and symbolic imagery",
            image: "20241118153540.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241118:byzantine:5ad8b28a"
        },
        {
            name: "Gothic",
            description: "Pointed arches, ribbed vaults, stained glass, and intricate tracery are hallmarks of this architectural and artistic style",
            image: "20241118155038.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241118:gothic:17fb210f"
        },
        {
            name: "Romanticism",
            description: "Emphasizes emotion, individualism, the power of nature, and the sublime",
            image: "20241118155936.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241118:romanticism:57d2de13"
        },
        {
            name: "Neoclassicism",
            description: "A revival of classical Greek and Roman art and architecture, emphasizing order, symmetry, and restraint",
            image: "20241118160433.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:neoclassicism:46ba55ca"
        },
        {
            name: "Rococo",
            description: "An ornamental and theatrical style known for its asymmetry, pastel colors, and lighthearted themes",
            image: "20241118160853.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:rococo:02f8917e"
        },
        {
            name: "Ukiyo-e",
            description: "Japanese woodblock prints and paintings of the Edo period (1603–1867), depicting scenes of everyday life",
            image: "20241118161430.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:ukiyo-e:37560484"
        },
        {
            name: "Impressionism",
            description: "Captures the fleeting moment and the subjective experience of light and color",
            image: "20241118163109.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:impressionism:86a365e4"
        },
        {
            name: "Art Nouveau",
            description: "Inspired by natural forms and structures, particularly curved lines of plants and flowers",
            image: "20241118163748.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:art-nouveau:775b9514"
        },
        {
            name: "Art Deco",
            description: "Geometric shapes, symmetry, and streamlined designs characterize this elegant and glamorous style",
            image: "20241118164309.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:art-deco:59aea921"
        }
    ],
    "Modern & Contemporary": [
        {
            name: "Surrealism",
            description: "Explores the unconscious mind and dreams, often creating bizarre and dreamlike imagery",
            image: "20241118165418.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:surrealism:8c44614d"
        },
        {
            name: "Lowbrow Pop Surrealism",
            description: "Combines pop culture imagery with surrealist themes, often with a playful or subversive edge",
            image: "20241118170344.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:lowbrow-pop-surrealism:de79b8d2"
        },
        {
            name: "Mid-Century Modern",
            description: "Clean lines, organic shapes, and a focus on functionality characterize this design movement",
            image: "20241118172001.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:mid-century-modern:3fad8183"
        },
        {
            name: "Bauhaus",
            description: "Influential design school that emphasized the unity of art, craft, and technology",
            image: "20241118172440.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:bauhaus:c4e34d94"
        }
    ],
    "Digital & Conceptual": [
        {
            name: "Data Visualization",
            description: "Transforms data into visual representations to make complex information more accessible",
            image: "20241119065120.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:data-visualization:cb06293b"
        },
        {
            name: "Generative Art",
            description: "Created through algorithms, computer programs, or autonomous systems",
            image: "20241119065321.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:generative-art:e7cf8dac"
        },
        {
            name: "Interactive Art",
            description: "Requires viewer participation to complete the artwork",
            image: "20241119065553.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:interactive-art:d4a70de2"
        },
        {
            name: "Augmented Reality Art",
            description: "Overlays digital elements onto the real world, enhancing or altering the viewer's perception of reality",
            image: "20241119065732.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:augmented-reality-art:ba78abb0"
        },
        {
            name: "Glitch Art",
            description: "Uses digital or analog errors for aesthetic purposes, often creating distorted or corrupted visuals",
            image: "20241119065843.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:glitch-art-interactive-generative:7cbb6e3e"
        },
        {
            name: "Interactive Installations & Projection Mapping",
            description: "Projects images onto three-dimensional surfaces to create immersive and interactive experiences",
            image: "20241119070023.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:interactive-installations-using-projection-mapping:aa11911d"
        },
        {
            name: "Cyberpunk UI",
            description: "Gritty, tech-focused interfaces often featuring neon colors, dystopian themes, and complex information displays",
            image: "20241119070445.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:cyberpunk-ui:c1ee6f63"
        }
    ],
    "Street/Urban & Illustration": [
        {
            name: "Street Art & Graffiti",
            description: "Visual art created in public locations, often unauthorized, ranging from simple tags to elaborate murals",
            image: "20241119083916.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:street-art-graffiti:83551141"
        },
        {
            name: "Comic Book Style (American & Manga)",
            description: "Distinct visual styles used in comics, characterized by dynamic compositions, bold lines, and vibrant colors",
            image: "20241119083926.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:comic-book-style-american-manga:1b283ce8"
        },
        {
            name: "Caricature",
            description: "Exaggerated portraits that emphasize distinctive features for comedic effect",
            image: "20241119084323.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:caricature:245117f4"
        },
        {
            name: "Children's Book Illustration",
            description: "Visual art created to accompany children's literature, often whimsical and colorful",
            image: "20241119083944.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:children-s-book-illustration:a860107f"
        }
    ],
    "Animation & Related": [
        {
            name: "Anime (Shonen, Shojo, Mecha, etc.)",
            description: "Japanese animation with diverse subgenres, each with its own distinct visual style",
            image: "20241119122812.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:anime-shonen-shojo-mecha-etc:36b49a5e"
        },
        {
            name: "Motion Graphics",
            description: "Animated text, shapes, and logos used in video production and graphic design",
            image: "20241119122925.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:motion-graphics:513c9087"
        },
        {
            name: "Cutout Animation",
            description: "Uses paper or digital cutouts to create animated sequences",
            image: "20241119123132.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:cutout-animation:a882c937"
        },
        {
            name: "Rotoscoping",
            description: "Animators trace over live-action footage to create realistic movement",
            image: "20241119123319.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:rotoscoping:e8dc9f39"
        },
        {
            name: "Pixar Style",
            description: "High-quality CG animation with stylized characters, appealing storytelling, and realistic lighting",
            image: "20241119123413.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:pixar-style:49df093e"
        },
        {
            name: "Limited Animation (UPA Style)",
            description: "Simplified animation style using fewer frames and more stylized movement",
            image: "20241119123516.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:limited-animation-upa-style:89d40009"
        },
        {
            name: "Claymation (CG Simulation)",
            description: "Animation using clay figures or digital simulations of clay",
            image: "20241119123609.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:claymation-cg-simulation:b01b6be7"
        },
        {
            name: "Flash Animation (Newgrounds Style)",
            description: "Vector-based animation often characterized by bold lines, simple shapes, and fast-paced action",
            image: "20241119123704.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:flash-animation-newgrounds-style:17c6ac51"
        },
        {
            name: "Cel Shading",
            description: "Non-photorealistic rendering technique that gives 3D models a cartoon-like appearance",
            image: "20241119123745.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:cel-shading:d12a43fd"
        },
        {
            name: "Pixel Art",
            description: "Digital art created using pixels as the basic building blocks, creating a retro or nostalgic aesthetic",
            image: "20241119123829.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:pixel-art:de4127da"
        },
        {
            name: "8-Bit & 16-Bit Pixel Art (Game Sprites)",
            description: "Pixel art reminiscent of early video game graphics",
            image: "20241119123917.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:8-bit-16-bit-pixel-art-game-sprites:6e6a3f9e"
        }
    ],
    "Design-Centric": [
        {
            name: "Psychedelic Art",
            description: "Vivid colors, swirling patterns, and distorted forms inspired by psychedelic experiences",
            image: "20241119124428.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:psychedelic-art:317b475f"
        },
        {
            name: "Flat Design",
            description: "Minimalist design aesthetic emphasizing simple shapes, bright colors, and two-dimensionality",
            image: "20241119124438.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:flat-design:f0ef877a"
        },
        {
            name: "Cyberpunk",
            description: "Dystopian science fiction genre characterized by advanced technology and gritty urban environments",
            image: "20241119124447.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:cyberpunk:a393f819"
        },
        {
            name: "Steampunk",
            description: "Retrofuturistic subgenre incorporating technology and aesthetics inspired by 19th-century steam-powered machinery",
            image: "20241119124454.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:steampunk:7632f1b8"
        },
        {
            name: "Vaporwave",
            description: "Aesthetics of early internet culture, retro technology, and consumerism",
            image: "20241119124503.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:vaporwave:7e847b0c"
        }
    ],
    "Other/Subgenres": [
        {
            name: "Tribal Art",
            description: "Visual art created by indigenous cultures, often with symbolic or spiritual significance",
            image: "20241119124745.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:tribal-art:957db735"
        },
        {
            name: "Noir Graphic Novel Style",
            description: "Dark, gritty visual style characterized by high contrast, dramatic lighting, and themes of crime and mystery",
            image: "20241119125143.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:noir-graphic-novel-style:3f207893"
        },
        {
            name: "Kitsch",
            description: "Art or design considered to be in poor taste because of excessive garishness or sentimentality",
            image: "20241119125156.png",
            link: "https://chat.mistral.ai/chat?model=ag:6728f2d0:20241119:kitsch:3cc2fe7b"
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // Populate sidebar with styles
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        const categoryName = category.dataset.category;
        const stylesList = category.querySelector('.styles-list');
        
        // Find the matching category in artStyles
        const categoryStyles = Object.entries(artStyles).find(([key]) => 
            key.toLowerCase().includes(categoryName))?.[1];
        
        if (categoryStyles) {
            categoryStyles.forEach(style => {
                const styleLink = document.createElement('a');
                styleLink.href = '#';
                styleLink.className = 'style-link';
                styleLink.textContent = style.name;
                styleLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    displayStyle(style);
                });
                stylesList.appendChild(styleLink);
            });
        }
    });

    // Search functionality
    const searchInput = document.getElementById('styleSearch');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        document.querySelectorAll('.style-link').forEach(link => {
            const styleName = link.textContent.toLowerCase();
            const category = link.closest('.category');
            link.style.display = styleName.includes(searchTerm) ? 'block' : 'none';
            
            // Show/hide categories based on whether they have visible styles
            if (category) {
                const hasVisibleStyles = Array.from(category.querySelectorAll('.style-link'))
                    .some(link => link.style.display !== 'none');
                category.style.display = hasVisibleStyles ? 'block' : 'none';
            }
        });
    });

    // Add category collapse functionality
    document.querySelectorAll('.category h2').forEach(header => {
        header.addEventListener('click', () => {
            const category = header.parentElement;
            category.classList.toggle('active');
            const stylesList = category.querySelector('.styles-list');
            stylesList.style.display = category.classList.contains('active') ? 'block' : 'none';
        });
    });

    // Add this function to display all styles in a grid
    function displayAllStyles() {
        const styleDisplay = document.getElementById('styleDisplay');
        let html = '';
        
        Object.entries(artStyles).forEach(([category, styles]) => {
            html += `
                <div class="category-section">
                    <h2>${category}</h2>
                    <div class="styles-grid">
            `;
            
            styles.forEach(style => {
                html += `
                    <div class="style-card-mini loading" id="card-${style.name.replace(/\s+/g, '-')}">
                        <h3>${style.name}</h3>
                        <div class="loading-spinner"></div>
                        <p>${style.description}</p>
                    </div>
                `;
                
                // Load image with error handling
                const img = new Image();
                img.onload = () => {
                    const card = document.getElementById(`card-${style.name.replace(/\s+/g, '-')}`);
                    if (card) {
                        card.classList.remove('loading');
                        card.innerHTML = `
                            <h3>${style.name}</h3>
                            <a href="${style.link}" target="_blank">
                                <img src="images/${style.image}" alt="${style.name}" loading="lazy">
                            </a>
                            <p>${style.description}</p>
                        `;
                    }
                };
                
                img.onerror = () => {
                    const card = document.getElementById(`card-${style.name.replace(/\s+/g, '-')}`);
                    if (card) {
                        card.classList.remove('loading');
                        card.innerHTML = `
                            <h3>${style.name}</h3>
                            <div class="error-message">
                                <i class="fas fa-exclamation-circle"></i>
                                <p>Image failed to load</p>
                            </div>
                            <p>${style.description}</p>
                        `;
                    }
                };
                
                img.src = `images/${style.image}`;
            });
            
            html += `
                    </div>
                </div>
            `;
        });
        
        styleDisplay.innerHTML = html;
    }

    // Add this to your DOMContentLoaded event listener
    document.getElementById('showAllBtn').addEventListener('click', displayAllStyles);

    // Add this to your existing event listeners
    document.getElementById('homeBtn').addEventListener('click', () => {
        const styleDisplay = document.getElementById('styleDisplay');
        styleDisplay.innerHTML = `
            <div class="welcome-message">
                <h1>Art Styles Catalog</h1>
                <p>Select a style from the sidebar to view details</p>
                <button id="showAllBtn" class="show-all-btn">Show All Styles</button>
            </div>
        `;
        
        // Re-add the event listener for the show all button
        document.getElementById('showAllBtn').addEventListener('click', displayAllStyles);
    });

    // Add quick preview functionality
    addQuickPreview();
});

// Add loading and error handling functionality
function displayStyle(style) {
    const styleDisplay = document.getElementById('styleDisplay');
    
    // Show loading state first
    styleDisplay.innerHTML = `
        <div class="style-card loading">
            <h2>${style.name}</h2>
            <div class="loading-spinner"></div>
            <p>${style.description}</p>
        </div>
    `;
    
    // Load image with error handling
    const img = new Image();
    
    img.onload = () => {
        styleDisplay.innerHTML = `
            <div class="style-card">
                <h2>${style.name}</h2>
                <a href="${style.link}" target="_blank">
                    <img src="images/${style.image}" alt="${style.name}" loading="lazy">
                </a>
                <p>${style.description}</p>
            </div>
        `;
    };
    
    img.onerror = () => {
        styleDisplay.innerHTML = `
            <div class="style-card error">
                <h2>${style.name}</h2>
                <div class="error-message">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Image failed to load</p>
                </div>
                <p>${style.description}</p>
            </div>
        `;
    };
    
    img.src = `images/${style.image}`;
}

function addQuickPreview() {
    const previewModal = document.createElement('div');
    previewModal.className = 'quick-preview';
    document.body.appendChild(previewModal);

    // Track touch interactions
    let touchTimer;
    let isScrolling = false;
    let startY;

    document.querySelectorAll('.style-link').forEach(link => {
        let hoverTimer;
        
        // Desktop hover events
        link.addEventListener('mouseenter', (e) => {
            if (window.innerWidth > 768) {
                hoverTimer = setTimeout(() => {
                    const styleName = link.textContent;
                    const style = findStyleByName(styleName);
                    if (style) {
                        const rect = link.getBoundingClientRect();
                        showPreview(style, rect);
                    }
                }, 300);
            }
        });

        link.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
                clearTimeout(hoverTimer);
                hidePreview();
            }
        });

        // Touch events
        link.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
            isScrolling = false;
            
            touchTimer = setTimeout(() => {
                if (!isScrolling) {
                    e.preventDefault();
                    const styleName = link.textContent;
                    const style = findStyleByName(styleName);
                    if (style) {
                        const rect = link.getBoundingClientRect();
                        showPreview(style, rect, true); // true indicates touch interaction
                    }
                }
            }, 500); // Longer delay for touch to differentiate from scrolling
        }, { passive: false });

        link.addEventListener('touchmove', (e) => {
            if (Math.abs(e.touches[0].clientY - startY) > 10) {
                isScrolling = true;
                clearTimeout(touchTimer);
                hidePreview();
            }
        });

        link.addEventListener('touchend', () => {
            clearTimeout(touchTimer);
            if (!isScrolling) {
                setTimeout(hidePreview, 1500); // Auto-hide after 1.5s on touch devices
            }
        });
    });

    // Close preview on scroll
    document.addEventListener('scroll', () => {
        hidePreview();
    }, { passive: true });

    function showPreview(style, rect, isTouch = false) {
        previewModal.innerHTML = `
            <div class="preview-content">
                <img src="images/${style.image}" alt="${style.name}" loading="lazy">
                <div class="preview-info">
                    <h3>${style.name}</h3>
                    <p>${style.description}</p>
                    ${isTouch ? '<div class="touch-hint">Tap anywhere to close</div>' : ''}
                </div>
            </div>
        `;
        
        // Position the preview for touch devices
        if (isTouch) {
            previewModal.style.left = '50%';
            previewModal.style.top = '50%';
            previewModal.style.transform = 'translate(-50%, -50%)';
        } else {
            const modalRect = previewModal.getBoundingClientRect();
            const leftPosition = rect.right + 10;
            const topPosition = rect.top - (modalRect.height / 4);
            previewModal.style.left = `${leftPosition}px`;
            previewModal.style.top = `${topPosition}px`;
            previewModal.style.transform = 'none';
        }
        
        previewModal.classList.add('active');
        if (isTouch) previewModal.classList.add('touch');
    }

    function hidePreview() {
        previewModal.classList.remove('active', 'touch');
    }

    // Add touch event to close preview when tapping outside
    document.addEventListener('touchstart', (e) => {
        if (previewModal.classList.contains('active') && 
            !previewModal.contains(e.target) && 
            !e.target.closest('.style-link')) {
            hidePreview();
        }
    });

    function findStyleByName(name) {
        for (const category of Object.values(artStyles)) {
            const style = category.find(s => s.name === name);
            if (style) return style;
        }
        return null;
    }
} 