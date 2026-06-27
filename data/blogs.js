// Centralized database for Kryvvia's premium engineering and product blogs.
// All articles have structured sections, code snippets, FAQs, and metadata.

export const blogsData = [
  {
    id: "from-research-to-real-world-ai",
    title: "From Research to Real-World AI: My Journey at IIT Hyderabad",
    category: "Artificial Intelligence",
    date: "Jun 15, 2026",
    readTime: "12 min read",
    author: "Nikshitha Vadthyavath",
    authorRole: "Co-founder & AI Researcher",
    authorAvatar: "/images/nikshitha.png",
    authorBio: "Information Technology undergraduate at IIIT Sonepat. Research Intern at IIT Hyderabad, specializing in computer vision, federated learning, and deep learning algorithms.",
    desc: "An in-depth look into facial emotion recognition research, preprocessing large datasets like DeepFace, and the complexities of deploying deep learning models in the real world.",
    metaDesc: "Explore Nikshitha's research journey at IIT Hyderabad, focusing on Computer Vision, DeepFace dataset preprocessing, Facial Emotion Recognition, and Federated Learning.",
    keywords: ["Computer Vision", "Deep Learning", "IIT Hyderabad", "Facial Emotion Recognition", "Federated Learning", "DeepFace Dataset"],
    ogTitle: "From Research to Real-World AI: My Journey at IIT Hyderabad",
    ogDesc: "Deep dive into Computer Vision research: Preprocessing datasets, training CNNs, and scaling models with Federated Learning at IIT Hyderabad.",
    suggestedCoverImage: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80",
    tags: ["Computer Vision", "Deep Learning", "Research", "Federated Learning", "Python"],
    toc: [
      { text: "Introduction", id: "introduction" },
      { text: "The Problem Statement", id: "problem-statement" },
      { text: "Background: Facial Emotion Recognition (FER)", id: "background" },
      { text: "Step-by-Step Dataset Preprocessing", id: "preprocessing" },
      { text: "Model Architecture & Training", id: "architecture" },
      { text: "Federated Learning Integration", id: "federated-learning" },
      { text: "Real-World Experience & Obstacles", id: "real-world" },
      { text: "Lessons Learned & Best Practices", id: "lessons" },
      { text: "Conclusion", id: "conclusion" }
    ],
    faqs: [
      { q: "What is the primary challenge in Facial Emotion Recognition?", a: "High variability in lighting, face angles, and subtle expressions. Preprocessing like histogram equalization and alignment are critical." },
      { q: "Why use Federated Learning for emotion recognition?", a: "It preserves user privacy by training models locally on edge devices and only sharing weight updates with a central coordinator rather than raw facial images." }
    ],
    content: [
      { type: "paragraph", text: "Artificial Intelligence research is often separated from industrial engineering. In academia, we focus on mathematical rigor, generalization boundaries, and state-of-the-art benchmarks. In production, we care about throughput, latency, memory limits, and edge device resource constraints. My research internship at IIT Hyderabad was a bridge between these two worlds, specifically exploring Facial Emotion Recognition (FER) under Federated Learning paradigms." },
      { type: "heading", level: 2, text: "The Problem Statement", id: "problem-statement" },
      { type: "paragraph", text: "Human emotion is multi-dimensional and contextual. While humans can easily decode micro-expressions, computer vision systems struggle with variation in head poses, low lighting, and cultural differences in expression. More importantly, collecting facial image data centralizes sensitive private images, posing immense security risks. The challenge: How do we train a highly accurate facial emotion classifier without centralizing private data?" },
      { type: "callout", typeClass: "info", title: "Key Research Objective", text: "To implement a convolutional neural network (CNN) pipeline trained via Federated Learning on the DeepFace dataset, achieving >82% emotion classification accuracy without centralizing user image databases." },
      { type: "heading", level: 2, text: "Background: Facial Emotion Recognition (FER)", id: "background" },
      { type: "paragraph", text: "Most modern FER pipelines utilize deep Convolutional Neural Networks (CNNs). We classify emotions into seven basic categories: Anger, Disgust, Fear, Happiness, Sadness, Surprise, and Neutral. To tackle the privacy challenge, we integrated Federated Learning—specifically the Federated Averaging (FedAvg) algorithm. Instead of sending raw pictures to a central cloud server, local models train on decentralized client nodes (e.g., local laptops or mobile phones), and only the weights are aggregated." },
      { type: "heading", level: 2, text: "Step-by-Step Dataset Preprocessing", id: "preprocessing" },
      { type: "paragraph", text: "Raw image data is notoriously dirty. The DeepFace dataset contains images of varying resolutions, lighting conditions, and facial angles. Here is the step-by-step pipeline we built for data ingestion and preprocessing:" },
      { type: "list", items: [
        "Facial Detection & Cropping: We used MTCNN (Multi-task Cascaded Convolutional Networks) to detect face bounding boxes and crop out background clutter.",
        "Grayscale Conversion & Normalization: Converting images to single-channel 48x48 arrays reduces network input parameters, speeding up training.",
        "Contrast Adjustments: Histogram Equalization was applied to neutralize varying exposure levels across indoor and outdoor shots.",
        "Data Augmentation: Horizontal flipping, subtle rotation, and random zooming were applied to prevent overfitting on local nodes."
      ]},
      { type: "code", language: "python", code: `import cv2
import numpy as np

def preprocess_face(image_path, target_size=(48, 48)):
    # Read image in grayscale
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    if img is None:
        raise FileNotFoundError("Image not found")
    
    # Apply Histogram Equalization to adjust contrast
    equalized = cv2.equalizeHist(img)
    
    # Resize to network input dimensions
    resized = cv2.resize(equalized, target_size, interpolation=cv2.INTER_AREA)
    
    # Normalize pixel values to range [0, 1]
    normalized = resized.astype("float32") / 255.0
    return np.expand_dims(normalized, axis=-1) # Add channel dimension` },
      { type: "heading", level: 2, text: "Model Architecture & Training", id: "architecture" },
      { type: "paragraph", text: "We designed a lightweight custom CNN to match edge compute envelopes. Spawning heavy architectures like ResNet-50 on mobile devices is impractical due to high memory consumption and execution latency. Our custom network consists of three convolutional blocks followed by batch normalization, max-pooling, dropout, and a fully connected classification head with softmax output." },
      { type: "diagram", caption: "FER CNN Pipeline Architecture", text: "[Input: 48x48x1] -> [Conv2D 32 -> BatchNorm -> ReLU -> MaxPooling -> Dropout(0.25)] -> [Conv2D 64 -> BatchNorm -> ReLU -> MaxPooling -> Dropout(0.25)] -> [Conv2D 128 -> BatchNorm -> ReLU -> MaxPooling -> Dropout(0.25)] -> [Flatten] -> [Dense 512 -> ReLU -> Dropout(0.5)] -> [Dense 7 -> Softmax Output]" },
      { type: "heading", level: 2, text: "Federated Learning Integration", id: "federated-learning" },
      { type: "paragraph", text: "In the federated setup, we divide the data across multiple simulated clients. The training process runs in rounds:" },
      { type: "list", items: [
        "The central server broadcasts the global model weights to a selected subset of active clients.",
        "Each client runs local gradient descent epochs on its own private subset of the dataset.",
        "Clients upload their updated local weights to the central coordinator.",
        "The server aggregates the updates using Federated Averaging (FedAvg), updating the global model weights for the next round."
      ]},
      { type: "pullquote", text: "Privacy is not a feature; it is an architectural constraint. Federated learning represents a paradigm shift where we bring the model to the data, not the data to the model.", author: "Nikshitha Vadthyavath" },
      { type: "heading", level: 2, text: "Real-World Experience & Obstacles", id: "real-world" },
      { type: "paragraph", text: "One major obstacle was Non-IID (Independent and Identically Distributed) data distribution. In reality, one client might have thousands of happy faces, while another has only sad or angry faces. If we aggregate updates from highly unbalanced local nodes, the global model experiences weight divergence and accuracy collapses. We resolved this by introducing a small, shared validation dataset on the coordinator node to regularize weights during aggregation rounds." },
      { type: "heading", level: 2, text: "Lessons Learned & Best Practices", id: "lessons" },
      { type: "list", items: [
        "Lightweight architectures are king: Reduce layer counts and parameter sizes to run smoothly on edge nodes.",
        "Validate on diverse distributions: Test model generalization against unseen subsets before pushing updates to the main branch.",
        "Aggressive preprocessing saves bandwidth: Normalizing images and resizing aggressively before local training reduces the network transmission payload."
      ]},
      { type: "heading", level: 2, text: "Conclusion", id: "conclusion" },
      { type: "paragraph", text: "Facial emotion recognition research at IIT Hyderabad highlighted that model building is only a fraction of the AI deployment journey. Data alignment, client hardware limitations, network latency, and privacy compliance are what determine the success of an AI solution in the real world." }
    ]
  },
  {
    id: "inside-llm-post-training",
    title: "Inside LLM Post Training: Improving Large Language Models at Ethara.ai",
    category: "Artificial Intelligence",
    date: "May 20, 2026",
    readTime: "15 min read",
    author: "Nikshitha Vadthyavath",
    authorRole: "Co-founder & AI Researcher",
    authorAvatar: "/images/nikshitha.png",
    authorBio: "Information Technology undergraduate at IIIT Sonepat. Former Intern at Ethara.ai focusing on LLM post-training alignment, reinforcement learning, and AI evaluation frameworks.",
    desc: "An inside look at LLM post-training engineering: RLHF, DPO, Chain-of-Thought validation, alignment criteria, and ELO ranking structures.",
    metaDesc: "Learn about LLM Post Training, instruction tuning, RLHF, Direct Preference Optimization (DPO), and model alignment strategies at Ethara.ai.",
    keywords: ["LLM Post Training", "RLHF", "DPO", "Model Alignment", "Ethara.ai", "Instruction Tuning", "ELO Ranking"],
    ogTitle: "Inside LLM Post Training: Improving LLMs at Ethara.ai",
    ogDesc: "A complete technical deep dive into Direct Preference Optimization (DPO), RLHF, and prompt alignment systems for production LLMs.",
    suggestedCoverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    tags: ["LLM", "AI Alignment", "NLP", "Machine Learning", "Python"],
    toc: [
      { text: "Introduction", id: "introduction" },
      { text: "What is LLM Post Training?", id: "what-is-post-training" },
      { text: "The Supervised Fine-Tuning (SFT) Baseline", id: "sft-baseline" },
      { text: "Preference Alignment: DPO and RLHF", id: "preference-alignment" },
      { type: "heading", text: "Chain of Thought (CoT) Validation", id: "cot-validation" },
      { text: "Evaluating Alignment: ELO Rankings", id: "elo-rankings" },
      { text: "Lessons Learned & Best Practices", id: "lessons" },
      { text: "Conclusion", id: "conclusion" }
    ],
    faqs: [
      { q: "What is the difference between SFT and Preference Optimization?", a: "SFT teaches the model how to output correct syntax and format (instruction following). Preference optimization (like DPO or PPO) aligns the model output to match human preferences regarding style, safety, and helpfulness." },
      { q: "How is ELO ranking applied to LLMs?", a: "Two models generate outputs for the same prompt, and an evaluator (human or strong LLM-as-a-judge) votes on the better response. Winning rate calculates ELO updates, mimicking chess tournaments." }
    ],
    content: [
      { type: "paragraph", text: "Pre-training a Large Language Model (LLM) on massive internet text scales teaches the model grammar, basic reasoning, and general facts. However, a pre-trained base model is not useful for consumers; it behaves as a simple auto-complete engine. To turn this base model into an interactive assistant, we must perform LLM Post Training. At Ethara.ai, I worked on the engineering pipelines that align, instruct-tune, and optimize these systems." },
      { type: "heading", level: 2, text: "What is LLM Post Training?", id: "what-is-post-training" },
      { type: "paragraph", text: "Post-training consists of refining pre-trained models using instruction tuning, reinforcement learning, and direct alignment algorithms. It guides models to follow user formatting instructions, adopt specific personas, output structured JSON schemas, and refrain from toxic or harmful prompts." },
      { type: "heading", level: 2, text: "The Supervised Fine-Tuning (SFT) Baseline", id: "sft-baseline" },
      { type: "paragraph", text: "The first step of post-training is Supervised Fine-Tuning (SFT). Here, we feed the model thousands of high-quality conversational prompts and target completions. The objective is to compute the loss only on target response tokens, adjusting model weights to adopt instruction-following behavior." },
      { type: "code", language: "python", code: `# Simplified PyTorch training loop snippet for SFT
import torch
from torch.utils.data import DataLoader

def sft_train_step(model, batch, optimizer):
    model.train()
    optimizer.zero_grad()
    
    input_ids = batch["input_ids"] # Prompt + Completion tokens
    attention_mask = batch["attention_mask"]
    labels = batch["labels"] # Prompt tokens masked to -100 (ignored in loss computation)
    
    outputs = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels)
    loss = outputs.loss
    loss.backward()
    
    optimizer.step()
    return loss.item()` },
      { type: "heading", level: 2, text: "Preference Alignment: DPO and RLHF", id: "preference-alignment" },
      { type: "paragraph", text: "While SFT teaches models format, it cannot distinguish subtle qualitative nuances. To enforce helpfulness and safety, we align models using preference datasets (pairs of chosen and rejected responses). Historically, Reinforcement Learning from Human Feedback (RLHF) required training a separate reward model and updating the policy via PPO. Today, Direct Preference Optimization (DPO) simplifies this by directly updating the model policy parameters using the mathematical relationship between the policy and the reward function, removing the need for a separate reward model." },
      { type: "heading", level: 2, text: "Chain of Thought (CoT) Validation", id: "cot-validation" },
      { type: "paragraph", text: "For reasoning and math operations, we guide models to output explicit reasoning tokens (e.g., <thought> blocks) before outputting the final answer. We verified that validating intermediate reasoning steps (Chain-of-Thought validation) drastically improves downstream validation accuracy, preventing hallucination during logic deductions." },
      { type: "pullquote", text: "A model that thinks before answering is always more consistent than a model that speaks immediately. Post-training is about teaching the machine to plan its thoughts.", author: "Nikshitha Vadthyavath" },
      { type: "heading", level: 2, text: "Evaluating Alignment: ELO Rankings", id: "elo-rankings" },
      { type: "paragraph", text: "To determine which model variant performs better, we deploy ELO rating systems. We pair two candidate model checkpoints (Model A and Model B), generate answers to standard prompt test benches, and use GPT-4 as an LLM-as-a-judge to evaluate outputs based on instruction adherence, tone, and conciseness. ELO ratings update in real-time as models battle across thousands of test queries." },
      { type: "heading", level: 2, text: "Lessons Learned & Best Practices", id: "lessons" },
      { type: "list", items: [
        "Data quality exceeds quantity: 5,000 highly curated, manual instructions yield much better results than 100,000 synthetic AI-generated inputs.",
        "Regularly check for catastrophic forgetting: Fine-tuning models on safety parameters can degrade their core mathematical or coding capabilities if not balanced.",
        "Implement strict formatting templates: Wrap instruction sets in systematic system tags (<|im_start|>system...<|im_end|>) to ensure clean model routing."
      ]},
      { type: "heading", level: 2, text: "Conclusion", id: "conclusion" },
      { type: "paragraph", text: "LLM post-training is the difference between a raw research prototype and a production-grade digital assistant. For agencies, understanding how to fine-tune and align lightweight model weights locally is a massive competitive advantage." }
    ]
  },
  {
    id: "building-gozy-startup",
    title: "Building Gozy: Turning a Student Project into an Incubation Startup",
    category: "Product & Strategy",
    date: "Apr 10, 2026",
    readTime: "10 min read",
    author: "Nikshitha Vadthyavath",
    authorRole: "Co-founder & AI Researcher",
    authorAvatar: "/images/nikshitha.png",
    authorBio: "Information Technology undergraduate at IIIT Sonepat. Co-founder of Gozy Private Limited, a startup incubated to deliver interactive solutions for Indian consumer segments.",
    desc: "Lessons in identifying customer problems, developing an MVP on a limited budget, and navigating college incubator setups as a student entrepreneur.",
    metaDesc: "Discover the journey of building Gozy: from identifying real-world student pain points to building an MVP, user validation, and securing startup incubation.",
    keywords: ["Gozy Startup", "Student Founder", "MVP Development", "Incubation", "Product Strategy", "User Validation"],
    ogTitle: "Building Gozy: Turning a Student Project into an Incubation Startup",
    ogDesc: "The ultimate student entrepreneur roadmap: building an MVP, running feedback loops, and validating products within university incubation centers.",
    suggestedCoverImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80",
    tags: ["Startup", "Product Management", "Entrepreneurship", "MVP", "Strategy"],
    toc: [
      { text: "Introduction", id: "introduction" },
      { text: "Finding the Right Problem", id: "finding-problem" },
      { text: "Scoping the Minimum Viable Product (MVP)", id: "scoping-mvp" },
      { text: "Running Iterative User Validation", id: "user-validation" },
      { text: "Startup Challenges & Pivots", id: "startup-challenges" },
      { text: "Securing University Incubation", id: "incubation" },
      { text: "Lessons for Student Founders", id: "lessons" },
      { text: "Conclusion", id: "conclusion" }
    ],
    faqs: [
      { q: "What is the biggest mistake student founders make?", a: "Over-engineering the product before validating if users actually want it. Focus on validating the core value proposition first." },
      { q: "How did you balance academics and startup development?", a: "By building a dedicated co-founding team with distinct operational boundaries—marketing/design vs backend architecture vs frontend merges." }
    ],
    content: [
      { type: "paragraph", text: "Many student developers believe that starting a business requires millions in venture capital and massive infrastructure. The truth is, building a startup begins with solving a local, painful problem that you experience firsthand. That is how Gozy was born during our sophomore year at IIIT Sonepat. We transformed a simple concept into an incubated startup structure." },
      { type: "heading", level: 2, text: "Finding the Right Problem", id: "finding-problem" },
      { type: "paragraph", text: "A product has no market value if it does not solve a real pain point. As students, we noticed how difficult it was for local campus vendors, student activities, and housing services to catalog inventory, share alerts, and handle payments without clunky paperwork. That friction inspired Gozy—a unified campus interaction and billing layer built to digitize student commerce." },
      { type: "heading", level: 2, text: "Scoping the Minimum Viable Product (MVP)", id: "scoping-mvp" },
      { type: "paragraph", text: "When we started building Gozy, we drafted a feature list that would take two years to implement. Realizing this error, we cut the scope down to the bare essentials: a digital catalog manager and a direct messaging channel. This became our MVP, built in three weeks using standard web stacks." },
      { type: "pullquote", text: "If you are not embarrassed by the first version of your product, you have launched too late.", author: "Reid Hoffman (cited in Gozy's first strategy meeting)" },
      { type: "heading", level: 2, text: "Running Iterative User Validation", id: "user-validation" },
      { type: "paragraph", text: "Instead of running hypothetical surveys, we deployed the MVP to a small test group of campus users. We sat with them, watched them tap buttons, and noted where they got stuck. These observation rounds revealed that users wanted a simpler WhatsApp integration, which led us to pivot our notification system toward direct WhatsApp updates rather than building custom push logic." },
      { type: "heading", level: 2, text: "Startup Challenges & Pivots", id: "startup-challenges" },
      { type: "paragraph", text: "Our biggest challenge was regulatory and payment setup for student-run micro-vendors. We had to pivot from direct transaction fees to a lightweight subscription model, which removed high onboarding compliance friction while giving vendors predictable costs." },
      { type: "heading", level: 2, text: "Securing University Incubation", id: "incubation" },
      { type: "paragraph", text: "With real transaction volume and user validation metrics in hand, we pitched Gozy to regional incubation panels. Having a working model, active metrics, and a validated problem statement secured us physical incubation space, legal mentorship, and early development grants." },
      { type: "heading", level: 2, text: "Lessons for Student Founders", id: "lessons" },
      { type: "list", items: [
        "Pick a co-founder with matching values but different skills: Pair developers with designers or marketers to cover all aspects of the product.",
        "Launch and fail locally: Test your concepts inside your university where acquisition costs are low and user access is direct.",
        "Prioritize problem-fit over technology: No one cares if your app is built on complex distributed stacks if it doesn't solve their daily struggle."
      ]},
      { type: "heading", level: 2, text: "Conclusion", id: "conclusion" },
      { type: "paragraph", text: "Gozy taught us that product management is not about writing thousands of lines of code. It is about understanding users, managing resource constraints, and having the courage to throw away features that do not work." }
    ]
  },
  {
    id: "publishing-first-ieee-paper",
    title: "Publishing My First IEEE Research Paper: A Student Guide",
    category: "Academic & Research",
    date: "Mar 05, 2026",
    readTime: "9 min read",
    author: "Nikshitha Vadthyavath",
    authorRole: "Co-founder & AI Researcher",
    authorAvatar: "/images/nikshitha.png",
    authorBio: "Information Technology undergraduate at IIIT Sonepat. IEEE research author, specializing in data preprocessing, computer vision systems, and medical imaging AI.",
    desc: "A comprehensive roadmap to researching, writing, formatting in LaTeX, and successfully passing the IEEE peer-review process as an undergraduate student.",
    metaDesc: "Step-by-step student guide to writing, formatting, submitting, and presenting an IEEE research paper in Artificial Intelligence and Computer Vision.",
    keywords: ["IEEE Paper", "Research Paper Guide", "LaTeX Formatting", "Academic Writing", "Peer Review", "Computer Science Research"],
    ogTitle: "Publishing My First IEEE Research Paper: A Student Guide",
    ogDesc: "The ultimate student guide to writing IEEE publications: LaTeX setup, reviewer feedback loops, and conference presentations.",
    suggestedCoverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
    tags: ["Research", "IEEE", "Academic Writing", "LaTeX", "Computer Science"],
    toc: [
      { text: "Introduction", id: "introduction" },
      { text: "Formulating a Novel Research Hypothesis", id: "novelty" },
      { text: "Structuring Your Academic Paper", id: "structure" },
      { text: "Mastering LaTeX and IEEE Templates", id: "latex" },
      { text: "Surviving the Peer-Review Process", id: "peer-review" },
      { text: "The Conference Presentation Experience", id: "conference" },
      { text: "Lessons Learned & Best Practices", id: "lessons" },
      { text: "Conclusion", id: "conclusion" }
    ],
    faqs: [
      { q: "How long does the IEEE review process take?", a: "Usually 3 to 6 months depending on the conference or journal, involving multiple rounds of revisions based on reviewer feedback." },
      { q: "Why is LaTeX preferred over Microsoft Word?", a: "LaTeX automatically handles cross-referencing, citation bibliography compilation, mathematical equations formatting, and layout constraints with mathematical accuracy." }
    ],
    content: [
      { type: "paragraph", text: "Publishing an IEEE research paper is one of the most rewarding milestones for a student developer. It transforms your coding project into formal, peer-reviewed knowledge recognized by global researchers. However, academic writing requires a strict style, layout, and level of rigor that is completely different from writing software documentation." },
      { type: "heading", level: 2, text: "Formulating a Novel Research Hypothesis", id: "novelty" },
      { type: "paragraph", text: "Before writing, you need a novel hypothesis. You don't have to invent a new neural network from scratch, but you must explore a novel application, a more efficient preprocessing algorithm, or a unique optimization method. For my paper, we focused on optimizing facial classification speeds under resource-constrained devices, benchmarking trade-offs between image dimensions and training performance." },
      { type: "heading", level: 2, text: "Structuring Your Academic Paper", id: "structure" },
      { type: "paragraph", text: "IEEE papers follow a rigorous structure:" },
      { type: "list", items: [
        "Abstract: A dense, 150-250 word summary of the problem, methodology, and key results.",
        "Introduction: Establishes context, explains why the problem matters, and lists your specific contributions.",
        "Literature Review: Critically evaluates existing approaches, identifying gaps in current systems.",
        "Methodology: Detailed description of your system architecture, math, data splits, and training loops.",
        "Results & Discussion: Clear graphs, tables, and accuracy metrics comparing your system to baseline models.",
        "Conclusion & Future Work: Summarizes findings and suggests future paths of exploration."
      ]},
      { type: "heading", level: 2, text: "Mastering LaTeX and IEEE Templates", id: "latex" },
      { type: "paragraph", text: "Do not write your paper in Word. IEEE provides standard two-column templates in LaTeX. LaTeX separates layout formatting from content writing, automatically generating perfectly compiled PDF layouts, equations, tables, and BibTeX bibliographies." },
      { type: "code", language: "latex", code: `\\documentclass[conference]{IEEEtran}
\\usepackage{cite}
\\usepackage{amsmath,amssymb,amsfonts}

\\begin{document}
\\title{Facial Expression Recognition Optimization via Localized Preprocessing}

\\author{\\IEEEauthorblockN{Nikshitha Vadthyavath}
\\IEEEauthorblockA{\\textit{Department of Information Technology} \\\\
\\textit{IIIT Sonepat}, Sonepat, India \\\\
email@domain.com}}

\\maketitle

\\begin{abstract}
This paper presents a lightweight convolutional model for...
\\end{abstract}
\\end{document}` },
      { type: "heading", level: 2, text: "Surviving the Peer-Review Process", id: "peer-review" },
      { type: "paragraph", text: "When you submit, 3 to 4 anonymous reviewers evaluate your paper. You will receive constructive criticisms, request for extra experiments, or layout adjustments. Do not take negative feedback personally; review loops are meant to make your research more robust. We addressed reviewer queries by providing additional benchmark comparisons." },
      { type: "heading", level: 2, text: "The Conference Presentation Experience", id: "conference" },
      { type: "paragraph", text: "Once accepted, you must present your paper at the IEEE conference. You have exactly 10 to 15 minutes to pitch your work using slide presentations, followed by a Q&A session with university professors, SDEs, and fellow researchers. It is a fantastic networking and public speaking experience." },
      { type: "pullquote", text: "Research is to see what everybody else has seen, and to think what nobody else has thought.", author: "Albert Szent-Gyorgyi (quoted in our presentation intro slide)" },
      { type: "heading", level: 2, text: "Lessons Learned & Best Practices", id: "lessons" },
      { type: "list", items: [
        "Focus on experimental reproducibility: Share your code repository and dataset links in the paper footer.",
        "Start writing early: Draft your methodology and literature sections while you are still debugging your code.",
        "Triple-check your citations: Use a citation manager (e.g. Zotero) to generate consistent, accurate BibTeX formats."
      ]},
      { type: "heading", level: 2, text: "Conclusion", id: "conclusion" },
      { type: "paragraph", text: "Publishing research is hard work, but seeing your name on IEEE Xplore makes it all worth it. It proves that student developers are capable of driving technological innovation." }
    ]
  },
  {
    id: "building-modern-full-stack-nextjs",
    title: "Building Modern Full Stack Applications with React and Next.js",
    category: "Web Dev",
    date: "Jun 10, 2026",
    readTime: "11 min read",
    author: "Sandeep Naik",
    authorRole: "Co-founder & Full Stack Developer",
    authorAvatar: "/images/sandeep.png",
    authorBio: "CSE student at IIIT Sonepat. Co-founder of Kryvvia. Expert in frontend architectures, Next.js optimization, state management, and full-stack integrations.",
    desc: "A comprehensive guide on engineering fast full-stack architectures using React 19, Next.js App Router, Tailwind CSS, SSR optimization, and SEO integrations.",
    metaDesc: "Discover the ultimate guide to building full-stack web apps with Next.js App Router, React Server Components (RSC), Tailwind, and performance optimization.",
    keywords: ["Next.js", "React Server Components", "SSR", "SEO Optimization", "Tailwind CSS", "Full Stack Development"],
    ogTitle: "Building Modern Full Stack Applications with React and Next.js",
    ogDesc: "Next.js App Router architectures: Learn React Server Components (RSC), Server Actions, SSR, and styling best practices for premium agencies.",
    suggestedCoverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "React", "Tailwind CSS", "JavaScript", "SEO"],
    toc: [
      { text: "Introduction", id: "introduction" },
      { text: "The Paradigm Shift: Next.js App Router", id: "app-router" },
      { text: "React Server Components (RSC)", id: "rsc" },
      { text: "Optimizing Tailwind CSS Layouts", id: "tailwind" },
      { text: "Dynamic SSR and Cache Invalidation", id: "ssr-cache" },
      { text: "SEO Best Practices in Next.js", id: "seo" },
      { text: "Lessons Learned & Best Practices", id: "lessons" },
      { text: "Conclusion", id: "conclusion" }
    ],
    faqs: [
      { q: "Why use React Server Components?", a: "They fetch data on the server, sending zero JavaScript to the client, which dramatically increases page load speeds and reduces client CPU overhead." },
      { q: "How does Next.js handle metadata for SEO?", a: "By exporting a static or dynamic `metadata` object in layouts or pages, allowing crawler bots to index semantic meta tags easily." }
    ],
    content: [
      { type: "paragraph", text: "Modern web users expect interfaces to load instantly, animate smoothly, and update in real-time. Meeting these requirements requires a shift from client-side single page apps (SPAs) to server-rendered architectures. Next.js has become the gold standard for full-stack React systems, combining server performance with rich client interaction." },
      { type: "heading", level: 2, text: "The Paradigm Shift: Next.js App Router", id: "app-router" },
      { type: "paragraph", text: "Next.js introduced a file-system based router using directories to map folders to routes. This framework supports nested layouts, loading states, and error boundary wrappers automatically, making application routes extremely robust and easy to configure." },
      { type: "heading", level: 2, text: "React Server Components (RSC)", id: "rsc" },
      { type: "paragraph", text: "By default, files inside the App Router are React Server Components. These components execute on the server, allowing direct connection to databases or external APIs without exposing client-side keys or increasing bundle sizes. Interactive elements use the `\"use client\"` directive at the top of the file to enable React state hooks and browser event listeners." },
      { type: "code", language: "javascript", code: `// Example of a React Server Component fetching data directly
import Link from 'next/link';

async function fetchProducts() {
    const res = await fetch('https://api.domain.com/products', {
        next: { revalidate: 3600 } // Cache data for 1 hour
    });
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
}

export default async function ProductsPage() {
    const products = await fetchProducts();
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => (
                <div key={p.id} className="border border-neutral-800 rounded-xl p-4 bg-neutral-950">
                    <h3 className="text-white font-bold">{p.name}</h3>
                    <p className="text-gray-400 text-sm">{p.price}</p>
                </div>
            ))}
        </div>
    );
}` },
      { type: "heading", level: 2, text: "Optimizing Tailwind CSS Layouts", id: "tailwind" },
      { type: "paragraph", text: "To avoid styling friction, we use Tailwind CSS. Tailwind compiles utility classes to native CSS, producing small build outputs with zero runtime style injection delays. For premium dark-mode layouts, we use utility variables and glassmorphism styling (`backdrop-blur-md bg-neutral-950/60 border border-neutral-900`)." },
      { type: "heading", level: 2, text: "Dynamic SSR and Cache Invalidation", id: "ssr-cache" },
      { type: "paragraph", text: "To deliver fast page loads, Next.js caches statically generated pages. When backend data changes, we trigger on-demand cache invalidation using `revalidatePath()` or `revalidateTag()` inside Server Actions, assuring users see real-time updates without forcing complete server restarts." },
      { type: "pullquote", text: "Performance is not a feature; it is the fundamental medium of user experience. If your app takes longer than 2 seconds to load, you have already lost 50% of your audience.", author: "Sandeep Naik" },
      { type: "heading", level: 2, text: "SEO Best Practices in Next.js", id: "seo" },
      { type: "paragraph", text: "For organic visibility, every page needs structured metadata. Next.js makes this simple: we export metadata objects that dynamically populate meta tags, OpenGraph images, and canonical headers. We also structure HTML semantically, using semantic tags (`main`, `article`, `header`, `footer`) and clear `h1` layouts." },
      { type: "heading", level: 2, text: "Lessons Learned & Best Practices", id: "lessons" },
      { type: "list", items: [
        "Minimize 'use client' directives: Keep interactive layers at the leaf components of your DOM tree, keeping parent containers server-rendered.",
        "Leverage dynamic image optimization: Use Next.js `<Image>` tags with layouts, sizes, and WebP compression to reduce mobile network usage.",
        "Implement structural skeletons: Use React Suspense with custom skeleton screens to maintain layout stability during asynchronous data fetches."
      ]},
      { type: "heading", level: 2, text: "Conclusion", id: "conclusion" },
      { type: "paragraph", text: "React and Next.js enable developers to build web experiences that are as fast as desktop apps while remaining friendly to SEO crawlers. Mastering these tools is standard practice for modern digital agencies." }
    ]
  },
  {
    id: "behind-scenes-bluestock-ipo-dashboard",
    title: "Behind the Scenes of Building an IPO Dashboard at Bluestock",
    category: "Internships",
    date: "Feb 18, 2026",
    readTime: "11 min read",
    author: "Sandeep Naik",
    authorRole: "Co-founder & Full Stack Developer",
    authorAvatar: "/images/sandeep.png",
    authorBio: "CSE student at IIIT Sonepat. Co-founder of Kryvvia. Former SDE Intern and Co-Team Lead at Bluestock Fintech, scaling frontend platforms and stock widgets.",
    desc: "A case study on building a high-traffic IPO analytics dashboard, handling real-time API integrations, and leading development merges.",
    metaDesc: "Step behind the scenes of building the Bluestock IPO analytics dashboard. Learn about React optimization, code merges, API structures, and team leadership.",
    keywords: ["Bluestock Fintech", "IPO Dashboard", "React API Integration", "Frontend Performance", "Team Leadership", "Software Engineering Internship"],
    ogTitle: "Behind the Scenes of Building an IPO Dashboard at Bluestock",
    ogDesc: "How we built and scaled an IPO tracking system for retail investors during my SDE team lead internship at Bluestock.",
    suggestedCoverImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "State Management", "Leadership", "Fintech", "Websites"],
    toc: [
      { text: "Introduction", id: "introduction" },
      { text: "The Problem Statement", id: "problem-statement" },
      { text: "Designing the Frontend Architecture", id: "frontend-architecture" },
      { text: "Integrating Real-time Financial APIs", id: "api-integration" },
      { text: "Optimizing DOM Rendering for IPO Tables", id: "dom-optimization" },
      { text: "Managing Pull Request Review Barriers", id: "team-collaboration" },
      { text: "Lessons Learned & Best Practices", id: "lessons" },
      { text: "Conclusion", id: "conclusion" }
    ],
    faqs: [
      { q: "How did you manage real-time alerts without draining battery?", a: "By using polling intervals and memoizing rendering states in React, avoiding redrawing elements unless stock prices actually changed." },
      { q: "What was your approach to code conflicts as Team Lead?", a: "We enforced structural feature-branch rules and ran daily automated checks on staging before merging code to master branches." }
    ],
    content: [
      { type: "paragraph", text: "As a student, transitioning from personal sandboxes to a production platform with active users is a major shift. During my internship at Bluestock Fintech, I was tasked with leading a team to build an IPO tracking dashboard. The dashboard had to process live application numbers, subscription statuses, GMP (Grey Market Premium) metrics, and stock exchange alert hooks." },
      { type: "heading", level: 2, text: "The Problem Statement", id: "problem-statement" },
      { type: "paragraph", text: "Retail investors require real-time IPO data to make bid decisions before lists close. The current system had multiple data silos, high database latency, and a clunky dashboard layout that confused users. Our team had to structure a fast interface capable of scaling to over 10,000 active investors without crashing backend resources." },
      { type: "heading", level: 2, text: "Designing the Frontend Architecture", id: "frontend-architecture" },
      { type: "paragraph", text: "We opted for a modular React framework. To prevent redundant updates, we separated layout blocks (IPO statistics grids, active lists, upcoming schedules) into pure components. We set up client-side states with lightweight Redux context layers, caching IPO list summaries to minimize API calls." },
      { type: "heading", level: 2, text: "Integrating Real-time Financial APIs", id: "api-integration" },
      { type: "paragraph", text: "Integrating live endpoints is tricky because financial APIs push updates at irregular intervals. We structured an Axios client wrapper equipped with token refreshes, local storage query caching, and automated fallback endpoints to load archived listings if third-party feeds failed." },
      { type: "code", language: "javascript", code: `// Axios instance with interceptors for auth and error recovery
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.bluestock.in/v1',
    timeout: 8000,
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const newTokens = await refreshAuthTokens();
            api.defaults.headers.common['Authorization'] = \`Bearer \${newTokens.accessToken}\`;
            return api(originalRequest);
        }
        return Promise.reject(error);
    }
);` },
      { type: "heading", level: 2, text: "Optimizing DOM Rendering for IPO Tables", id: "dom-optimization" },
      { type: "paragraph", text: "IPO databases contain thousands of entries. In early trials, rendering long lists caused notable frame rate drops when users searched or filtered results. We solved this by using virtual list grids (`react-window`), which only render the table rows visible in the viewport, saving client-side rendering cycles." },
      { type: "pullquote", text: "Good leadership is about clearing roadblocks for your developers, establishing strict merge pipelines, and defining clear milestones. Great code follows naturally.", author: "Sandeep Naik" },
      { type: "heading", level: 2, text: "Managing Pull Request Review Barriers", id: "team-collaboration" },
      { type: "paragraph", text: "Serving as Co-Team Lead taught me that git coordination is just as important as writing logic. We established strict code validation rules: every pull request required approval from two developers, passed clean lint checks, and passed unit tests before merging to prevent breaking active deployments." },
      { type: "heading", level: 2, text: "Lessons Learned & Best Practices", id: "lessons" },
      { type: "list", items: [
        "Prioritize mobile users: 70% of retail investors track IPOs on their phones. Fast touch gestures and minimal layouts are critical.",
        "Build fallback mock data: Always prepare fallback states to display cached listings if external APIs experience downtime.",
        "Establish unified CSS variables: Keeping UI spacing, colors, and borders tied to global design variables ensures consistency."
      ]},
      { type: "heading", level: 2, text: "Conclusion", id: "conclusion" },
      { type: "paragraph", text: "Shipping the Bluestock IPO dashboard taught me how to translate complex business specifications into clean, scalable code. It proved that student teams can build high-performance products when aligned with clear goals." }
    ]
  },
  {
    id: "spring-boot-architecture-production",
    title: "Spring Boot Architecture for Production Applications",
    category: "Backend Development",
    date: "Jun 01, 2026",
    readTime: "11 min read",
    author: "Samadhan Ghorpade",
    authorRole: "Co-founder & Backend Engineer",
    authorAvatar: "/images/samadhan_v4.png",
    authorBio: "CSE student at IIIT Sonepat. Co-founder of Kryvvia. Specializes in building secure, distributed Java microservices, REST API optimization, and CI/CD pipelines.",
    desc: "A detailed blueprint on constructing clean, layered Spring Boot backends, managing database connection pools, implementing JWT security, and optimizing throughput.",
    metaDesc: "Explore the complete architectural guide to building production-ready Spring Boot applications with layered structures, JWT security, and database pooling.",
    keywords: ["Spring Boot", "Layered Architecture", "REST API", "Database Pooling", "Spring Security", "Java Backend"],
    ogTitle: "Spring Boot Architecture for Production Applications",
    ogDesc: "Production-ready Spring Boot: Layered architectures, HikariCP configuration, Spring Security JWT, and transaction best practices.",
    suggestedCoverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Java", "Spring Boot", "Backend", "Security", "PostgreSQL"],
    toc: [
      { text: "Introduction", id: "introduction" },
      { text: "The Classic Layered Architecture Pattern", id: "layered-architecture" },
      { text: "Configuring Connection Pooling (HikariCP)", id: "connection-pooling" },
      { text: "Securing APIs with JWT and Spring Security", id: "api-security" },
      { text: "Implementing Global Exception Handlers", id: "exception-handling" },
      { text: "Lessons Learned & Best Practices", id: "lessons" },
      { text: "Conclusion", id: "conclusion" }
    ],
    faqs: [
      { q: "Why is HikariCP preferred in Spring Boot?", a: "HikariCP is a high-performance database connection pool that minimizes connection creation overhead, resulting in faster database query execution." },
      { q: "How does Spring Boot handle cross-cutting concerns?", a: "By using AOP (Aspect-Oriented Programming) or Spring interceptors to manage logging, transaction handling, and security globally." }
    ],
    content: [
      { type: "paragraph", text: "Spring Boot is the default backend framework for large enterprise systems because it provides reliable scaling, strong dependency injection, and clean transaction limits. However, if you don't structure it correctly, your codebase can quickly become messy. This guide outlines the layered architecture we use at Kryvvia to build production backends." },
      { type: "heading", level: 2, text: "The Classic Layered Architecture Pattern", id: "layered-architecture" },
      { type: "paragraph", text: "To maintain clean code separation, we divide the system into four core layers:" },
      { type: "list", items: [
        "Controller Layer (REST): Handles incoming HTTP requests, validates input objects (@Valid), and maps DTOs (Data Transfer Objects) to responses.",
        "Service Layer: Contains the core business logic. All database transactions are managed here using the @Transactional annotation.",
        "Repository Layer (Data): Connects to the database using Spring Data JPA or native SQL queries.",
        "Model/Entity Layer: Represents the database tables as mapped Java classes."
      ]},
      { type: "diagram", caption: "Layered Spring Boot Design Pattern", text: "[Client Request] -> [Controller (DTO Mapping)] -> [Service (Business Logic / Transactions)] -> [Repository (JPA/SQL Queries)] -> [Database (PostgreSQL)]" },
      { type: "image", url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80", caption: "Spring Boot Microservice Communication Topology" },
      { type: "heading", level: 2, text: "Configuring Connection Pooling (HikariCP)", id: "connection-pooling" },
      { type: "paragraph", text: "Production backends can fail under sudden load spikes if database connection pools are not configured correctly. Spring Boot uses HikariCP by default. We configure maximum pool size, idle timeouts, and connection validation parameters in `application.yml` to balance load speeds and database memory usage." },
      { type: "code", language: "yaml", code: `spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/kryvvia_db
    username: kryvvia_admin
    password: secure_password
    hikari:
      maximum-pool-size: 20
      minimum-idle: 5
      idle-timeout: 300000
      connection-timeout: 20000
      max-lifetime: 1800000` },
      { type: "heading", level: 2, text: "Securing APIs with JWT and Spring Security", id: "api-security" },
      { type: "paragraph", text: "We secure our REST controllers using Spring Security. We implement custom stateless filters that intercept requests, extract JWT tokens from the Authorization header, validate the token signatures, and inject authenticated user contexts into the SecurityContextHolder." },
      { type: "pullquote", text: "Clean backend architecture is like plumbing: if designed correctly, it operates invisibly. If not, it becomes a bottleneck that slows down the entire system.", author: "Samadhan Ghorpade" },
      { type: "heading", level: 2, text: "Implementing Global Exception Handlers", id: "exception-handling" },
      { type: "paragraph", text: "Never expose raw stack traces to your client apps; it is a security risk. We build global handlers using `@RestControllerAdvice` that capture exceptions globally and format them into consistent JSON error schemas." },
      { type: "heading", level: 2, text: "Lessons Learned & Best Practices", id: "lessons" },
      { type: "list", items: [
        "Write pure business logic in services: Keep controllers thin and database entities free of complex execution logic.",
        "Avoid N+1 query problems: Use entity fetch graphs or join fetch queries to fetch related entities in a single SQL operation.",
        "Implement request validation: Use standard validation annotations (@NotNull, @Size) on incoming DTOs before running logic."
      ]},
      { type: "heading", level: 2, text: "Conclusion", id: "conclusion" },
      { type: "paragraph", text: "A robust Spring Boot backend ensures that your digital products can scale to handle millions of transactions safely. Following these layered patterns makes the code easy to test, maintain, and upgrade." }
    ]
  },
  {
    id: "deploying-scalable-applications-aws",
    title: "Deploying Scalable Applications on AWS with Docker and CI/CD",
    category: "DevOps & Cloud",
    date: "May 15, 2026",
    readTime: "12 min read",
    author: "Samadhan Ghorpade",
    authorRole: "Co-founder & Backend Engineer",
    authorAvatar: "/images/samadhan_v4.png",
    authorBio: "CSE student at IIIT Sonepat. Co-founder of Kryvvia. Expert in AWS architecture, Docker containerization, and setting up secure CI/CD pipelines.",
    desc: "A hands-on guide to containerizing web applications, configuring AWS EC2 and S3, and deploying automated GitHub Actions pipelines under a strict budget.",
    metaDesc: "Step-by-step guide to deploying scalable web apps on AWS using Docker, GitHub Actions CI/CD, Amazon S3, and cost optimization techniques.",
    keywords: ["AWS", "Docker Containerization", "GitHub Actions CI/CD", "Amazon S3", "EC2 Deployment", "Cloud Security"],
    ogTitle: "Deploying Scalable Applications on AWS with Docker and CI/CD",
    ogDesc: "The complete DevOps roadmap: Docker setup, EC2 deployment configurations, and automated zero-downtime GitHub Actions workflows.",
    suggestedCoverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    tags: ["AWS", "Docker", "DevOps", "CI-CD", "GitHub Actions"],
    toc: [
      { text: "Introduction", id: "introduction" },
      { text: "The Goal: Modern Automated Deployment", id: "modern-deployment" },
      { text: "Step 1: Containerizing with Docker", id: "docker-setup" },
      { text: "Step 2: Configuring AWS Infrastructure", id: "aws-config" },
      { text: "Step 3: Setting Up GitHub Actions CI/CD", id: "cicd-pipeline" },
      { text: "Cost Optimization & Budget Controls", id: "cost-controls" },
      { text: "Lessons Learned & Best Practices", id: "lessons" },
      { text: "Conclusion", id: "conclusion" }
    ],
    faqs: [
      { q: "Why use multi-stage Docker builds?", a: "Multi-stage builds allow you to compile your code in a temporary build container and only copy the compiled output into the final minimal image, reducing the size of the final image by up to 90%." },
      { q: "How do we ensure zero-downtime during updates?", a: "By using reverse proxies like Nginx to route traffic to the active container, starting the new version, verifying it is healthy, and only then routing traffic to it before shutting down the old container." }
    ],
    content: [
      { type: "paragraph", text: "Manually SSHing into a server to deploy code is fine for student projects, but it is too slow and error-prone for professional applications. In production, we need automated deployments. This guide details how to build a robust deployment pipeline using Docker, GitHub Actions, and AWS." },
      { type: "heading", level: 2, text: "The Goal: Modern Automated Deployment", id: "modern-deployment" },
      { type: "paragraph", text: "Our goal is simple: whenever a developer merges a feature branch into the `main` branch, a pipeline should automatically build the Docker image, push it to a secure repository, pull it onto our AWS host, and restart the container without downtime." },
      { type: "heading", level: 2, text: "Step 1: Containerizing with Docker", id: "docker-setup" },
      { type: "paragraph", text: "We start by writing a multi-stage Dockerfile. This pattern ensures our production images are small and secure, containing only the runtime dependencies." },
      { type: "code", language: "dockerfile", code: `# Stage 1: Build the application
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Stage 2: Build the final minimal runtime image
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=build /app/target/app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]` },
      { type: "heading", level: 2, text: "Step 2: Configuring AWS Infrastructure", id: "aws-config" },
      { type: "paragraph", text: "Next, we set up our AWS infrastructure. We spawn an EC2 instance inside a secure Virtual Private Cloud (VPC), configure Security Groups to only allow HTTP/HTTPS traffic, and set up an Amazon S3 bucket for static media assets coupled with CloudFront for global caching." },
      { type: "heading", level: 2, text: "Step 3: Setting Up GitHub Actions CI/CD", id: "cicd-pipeline" },
      { type: "paragraph", text: "We automate the deployment using GitHub Actions. We configure a workflow file under `.github/workflows/deploy.yml` that triggers on merges to the main branch, builds the Docker image, and uses SSH keys to run container updates on the EC2 host." },
      { type: "pullquote", text: "Automation is not about saving time; it is about establishing predictability. When deployments are automated, we eliminate human configuration error.", author: "Samadhan Ghorpade" },
      { type: "heading", level: 2, text: "Cost Optimization & Budget Controls", id: "cost-controls" },
      { type: "paragraph", text: "To stay within budget, we avoid expensive database licenses and managed container services when starting. We use Docker Compose to run PostgreSQL and Nginx directly on the EC2 host, and we set up S3 Lifecycle Policies to archive older log files automatically." },
      { type: "heading", level: 2, text: "Lessons Learned & Best Practices", id: "lessons" },
      { type: "list", items: [
        "Store secrets in environment variables: Never commit database passwords or API keys to git repositories.",
        "Implement health check endpoints: Configure your reverse proxy to check `/health` paths before routing user traffic to the container.",
        "Set up billing alerts: Configure AWS budget notifications to send email updates if cost metrics exceed expected limits."
      ]},
      { type: "heading", level: 2, text: "Conclusion", id: "conclusion" },
      { type: "paragraph", text: "A robust CI/CD pipeline lets you ship features to users quickly and safely. Investing time to set up clean Docker and AWS pipelines pays off in stable systems and happy clients." }
    ]
  },
  {
    id: "how-we-build-websites-kryvvia",
    title: "How We Build Websites at Kryvvia: The Complete Client Workflow",
    category: "Agency Workflows",
    date: "Jun 20, 2026",
    readTime: "10 min read",
    author: "Kryvvia Team",
    authorRole: "Software Agency Core Founders",
    authorAvatar: "/images/nikshitha.png",
    authorBio: "Written by the core engineering and design team at Kryvvia. We combine AI research, frontend engineering, and backend scaling to ship digital products.",
    desc: "An inside look at our step-by-step agency process: Discovery, UX wireframes, visual design, custom coding, testing, and deployment.",
    metaDesc: "Step-by-step walkthrough of Kryvvia's software development lifecycle: from initial discovery, research, design, coding, testing to AWS deployment.",
    keywords: ["Agency Workflow", "Software Development Lifecycle", "UX Wireframing", "Web Development Process", "Agile Testing", "Kryvvia Workflow"],
    ogTitle: "How We Build Websites at Kryvvia: The Complete Client Workflow",
    ogDesc: "The engineering and design roadmap behind every client project shipped at Kryvvia, from discovery workshops to production launch.",
    suggestedCoverImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    tags: ["Agency", "Design", "Development", "Workflows", "Product"],
    toc: [
      { text: "Introduction", id: "introduction" },
      { text: "1. Discovery & Requirement Workshops", id: "discovery" },
      { text: "2. Visual Research & Moodboards", id: "research" },
      { text: "3. Wireframing and UX Flows", id: "wireframes" },
      { text: "4. UI Design & Component Systems", id: "ui-design" },
      { text: "5. Frontend & Backend Development", id: "development" },
      { text: "6. QA, Testing, & Optimization", id: "testing" },
      { text: "7. Deployment, SEO, and Maintenance", id: "deployment" },
      { text: "Conclusion", id: "conclusion" }
    ],
    faqs: [
      { q: "How long does a typical web project take at Kryvvia?", a: "Typically 4 to 8 weeks depending on complexity, covering all design, development, and testing phases." },
      { q: "Can we track progress during the development cycle?", a: "Yes, we share interactive Figma prototypes and staging site URLs, running weekly synchronization meetings to review progress." }
    ],
    content: [
      { type: "paragraph", text: "When clients hire a software agency, they aren't just paying for code. They are hiring a structured process that turns ideas into reliable digital products. At Kryvvia, we have developed a client workflow designed to eliminate confusion and deliver high-performance applications." },
      { type: "heading", level: 2, text: "1. Discovery & Requirement Workshops", id: "discovery" },
      { type: "paragraph", text: "Every project starts with discovery. We sit down with clients to map their business goals, user profiles, and technical requirements, producing a clear project scope that prevents feature creep." },
      { type: "heading", level: 2, text: "2. Visual Research & Moodboards", id: "research" },
      { type: "paragraph", text: "We research visual styling patterns, competitor layouts, and typography palettes to build moodboards that establish the aesthetic direction before writing any styles." },
      { type: "heading", level: 2, text: "3. Wireframing and UX Flows", id: "wireframes" },
      { type: "paragraph", text: "We create low-fidelity wireframes in Figma to map the user journey, ensuring layouts are intuitive and navigation is clear before focusing on colors and assets." },
      { type: "heading", level: 2, text: "4. UI Design & Component Systems", id: "ui-design" },
      { type: "paragraph", text: "Once wireframes are approved, we build high-fidelity UI designs. We construct a consistent design system (buttons, inputs, font sizes) to keep the app visual identity clean and aligned." },
      { type: "heading", level: 2, text: "5. Frontend & Backend Development", id: "development" },
      { type: "paragraph", text: "Next, we code the application. We use Next.js and Tailwind CSS for the frontend, and Spring Boot or Node.js for the backend. We write modular, reusable code that connects to clean database layers." },
      { type: "code", language: "javascript", code: `// Typical modular component design pattern at Kryvvia
import React from 'react';

export default function Card({ title, description, children }) {
    return (
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 space-y-4 hover:border-neutral-700 transition">
            <h3 className="text-white text-lg font-bold">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            {children}
        </div>
    );
}` },
      { type: "heading", level: 2, text: "6. QA, Testing, & Optimization", id: "testing" },
      { type: "paragraph", text: "We test code across various viewports and browsers. We run automated accessibility checks and optimize loading performance to achieve high scores on Google Lighthouse audits." },
      { type: "heading", level: 2, text: "7. Deployment, SEO, and Maintenance", id: "deployment" },
      { type: "paragraph", text: "We deploy the application on AWS, configure meta descriptions and canonical links for SEO, and set up automated health monitoring to track uptime." },
      { type: "pullquote", text: "A great digital product is not defined by code complexity; it is defined by user satisfaction and commercial impact.", author: "Kryvvia Founders" },
      { type: "heading", level: 2, text: "Conclusion", id: "conclusion" },
      { type: "paragraph", text: "Our client workflow ensures that every product we build is delivered on schedule, aligns with business goals, and provides a polished experience for users." }
    ]
  },
  {
    id: "choosing-website-mobile-app-ai-solution",
    title: "Choosing Between a Website, Mobile App, or AI Solution for Your Business",
    category: "Product & Strategy",
    date: "Jun 22, 2026",
    readTime: "9 min read",
    author: "Kryvvia Team",
    authorRole: "Software Agency Core Founders",
    authorAvatar: "/images/nikshitha.png",
    authorBio: "Written by the core engineering and design team at Kryvvia. We guide startup founders and enterprises on technical architectures, product-market fit, and tech choices.",
    desc: "A strategic guide to choosing the right technical path for your product, mapping budgets, timelines, and business goals to the ideal stack.",
    metaDesc: "How to decide between building a web app, a mobile app, or integrating an AI solution for your business. Strategic recommendations from Kryvvia.",
    keywords: ["Web App vs Mobile App", "AI Solution Strategy", "Product Design Decisions", "Software Budget Planning", "Tech Stack Strategy"],
    ogTitle: "Choosing Between a Website, Mobile App, or AI Solution for Your Business",
    ogDesc: "The strategic roadmap to choosing the right technical solution based on your target audience, budget, and business objectives.",
    suggestedCoverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: ["Product Strategy", "AI", "Mobile Apps", "Websites", "Consulting"],
    toc: [
      { text: "Introduction", id: "introduction" },
      { text: "Evaluating Your Business Goals", id: "business-goals" },
      { text: "Understanding the Web Application Pathway", id: "web-pathway" },
      { text: "Understanding the Mobile Application Pathway", id: "mobile-pathway" },
      { text: "Understanding the AI Solution Pathway", id: "ai-pathway" },
      { text: "Cost, Timeline, and Scalability Comparisons", id: "comparisons" },
      { text: "Lessons Learned & Best Practices", id: "lessons" },
      { text: "Conclusion", id: "conclusion" }
    ],
    faqs: [
      { q: "Can we build a hybrid web/mobile solution?", a: "Yes, using frameworks like React Native or building a responsive Progressive Web App (PWA) lets you target both web and mobile users with a unified codebase." },
      { q: "Is an AI solution always necessary?", a: "No. AI is useful for automation, prediction, and personalization, but simple databases are often sufficient for standard transactional applications." }
    ],
    content: [
      { type: "paragraph", text: "When launching a new business or digitizing a workflow, one of the first questions you must answer is: What tech stack should we build? Should we build a web application, launch a mobile app, or integrate an AI solution? Making the wrong choice early on can waste resources and delay your launch." },
      { type: "heading", level: 2, text: "Evaluating Your Business Goals", id: "business-goals" },
      { type: "paragraph", text: "The choice of platform depends on your target audience and user patterns:" },
      { type: "list", items: [
        "Web App: Ideal for discoverability, search engine indexing (SEO), wide accessibility across devices, and quick deployment updates.",
        "Mobile App: Best for recurring usage, offline access, notifications, and utilizing device sensors (GPS, camera, Bluetooth).",
        "AI Integration: Perfect for automating tasks, processing unstructured logs, predicting trends, and personalization."
      ]},
      { type: "heading", level: 2, text: "Understanding the Web Application Pathway", id: "web-pathway" },
      { type: "paragraph", text: "Web applications are accessible from any browser with a single URL, making acquisition friction low. They are the ideal starting point for SaaS applications, business portals, e-commerce, and portfolios." },
      { type: "heading", level: 2, text: "Understanding the Mobile Application Pathway", id: "mobile-pathway" },
      { type: "paragraph", text: "If your product requires frequent interactions throughout the day, offline capabilities, or device sensor integration, a mobile app is the right choice. We use React Native to build cross-platform apps for iOS and Android using a shared codebase." },
      { type: "heading", level: 2, text: "Understanding the AI Solution Pathway", id: "ai-pathway" },
      { type: "paragraph", text: "If you have structured historical datasets and want to automate decision-making or generate personalized responses, you should integrate an AI solution. We build custom computer vision, NLP, and LLM pipelines to optimize business logic." },
      { type: "pullquote", text: "Do not build an AI solution because it is trending. Build it because you have a clear automation bottleneck that cannot be solved with traditional algorithms.", author: "Kryvvia Founders" },
      { type: "heading", level: 2, text: "Cost, Timeline, and Scalability Comparisons", id: "comparisons" },
      { type: "paragraph", text: "Web apps generally have the fastest time-to-market and lowest launch costs. Mobile apps involve app store approval processes and double compiling dependencies. AI pipelines require model training, validation, and specialized hosting compute." },
      { type: "heading", level: 2, text: "Lessons Learned & Best Practices", id: "lessons" },
      { type: "list", items: [
        "Start with a Web MVP: Validate your product-market fit on the web before investing in native mobile development.",
        "Evaluate AI data quality: Ensure you have clean datasets before training custom machine learning models.",
        "Optimize cloud budgets: Monitor container sizes and server utilization to avoid high cloud hosting bills."
      ]},
      { type: "heading", level: 2, text: "Conclusion", id: "conclusion" },
      { type: "paragraph", text: "Choosing the right technical path saves time and resources. Aligning your platform choice with your business goals ensures you build a product that provides value to your users." }
    ]
  }
];
