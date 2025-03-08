import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface BlogPost {
  Blog_ID: number;
  Blog_Title: string;
  Blog_Image: string;
  Blog_Date: string;
  Blog_shortDescription: string;
  Blog_Category: 'Aftercare' | 'Service';
  Blog_fullContent?: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      Blog_ID: 1111,
      Blog_Title: 'Pocket These Quick Tips for Cleaning Your Ear Piercings Without Worrying About Bumps',
      Blog_Image: 'Post1.png',
      Blog_Date: 'February 22, 2026',
      Blog_shortDescription: 'Are you passionate about ear piercings but afraid of infection or pus?',
      Blog_Category: 'Service',
      Blog_fullContent: `The Proper Ear Piercing Aftercare Routine\n
      Proper ear piercing aftercare significantly impacts the healing time of your piercing.\n
      The ear piercing cleaning aftercare process will proceed in three basic steps:\n
      • Step 1: Use a cotton swab and saline solution to clean.
      Begin by thoroughly washing your hands with soap and water. Prepare a sterile saline solution (available at most pharmacies) or use a pre-made saline wound wash. Saturate a clean cotton swab or gauze pad with the saline solution. Gently clean around the front and back of your piercing, removing any crust or debris. Avoid twisting or turning the earring during this step, as it can irritate the piercing. It is vital to use sterile saline solution, as other solutions can cause irritation. \n
      • Step 2: Apply antiseptic solution for the first 2-3 days.
      For the first 2-3 days following your piercing, apply a mild antiseptic solution (such as a piercing aftercare spray recommended by your piercer) to the area. Apply a small amount of antiseptic to a clean cotton swab or directly to the piercing, following the instructions provided with the antiseptic product. Antiseptic assists in preventing infection in the beginning stages of healing. Do not overuse antiseptic solutions as they can dry out the skin. \n 
      • Step 3: Wipe again with clean water.
      After applying the antiseptic (or after saline cleaning after the first few days), gently rinse the piercing with clean, lukewarm water. This step helps to remove any residual saline or antiseptic solution. Pat the area dry with a clean, disposable paper towel or allow it to air dry. Avoid using cloth towels, as they can harbor bacteria.\n
      `
    },
    {
      Blog_ID: 1112,
      Blog_Title: 'How to Treat Ear Piercing Bumps at Home',
      Blog_Image: 'Post2.png',
      Blog_Date: 'February 20, 2026',
      Blog_shortDescription: 'Ear piercing bumps are common. Learn how to treat them at home for quick healing.',
      Blog_Category: 'Aftercare',
      Blog_fullContent: `Understanding Ear Piercing Bumps\n
      Ear piercing bumps can range from minor irritations to serious complications. Recognizing the type of bump and its underlying cause is key to effective management.
      Ear piercing bumps can be caused by:\n
      • Allergic reactions: Particularly to nickel, are another common cause, with other metals and jewelry coatings also capable of triggering sensitivities. These reactions typically present as redness, itching, swelling, and bump formation\n
      • Infection: Whether bacterial or, rarely, fungal, can also lead to bumps, with infected keloids adding further complexity. Signs of infection include pus or discharge, increased pain, swelling, redness, and warmth, sometimes accompanied by fever or chills\n
      • Trauma to the piercing site: Such as snagging, pulling, sleeping on the piercing, impacts to the ear, or friction from tight clothing or accessories, can cause irritation, inflammation, and bump development.\n
      Home Treatment Methods: Saline soaks, using sterile saline solution and warm compresses, are a foundational home treatment. After soaking, gently pat the area dry. Diluted tea tree oil, known for its antimicrobial and anti-inflammatory properties, can be applied sparingly after a patch test, using a carrier oil to minimize irritation. Chamomile compresses, made with warm, organic chamomile tea, offer soothing and anti-inflammatory benefits when applied for short periods. It is vital to avoid touching or rotating the jewelry to minimize handling and prevent unnecessary movement, ensuring hands are clean if contact is unavoidable. Finally, using hypoallergenic jewelry, made from implant-grade materials and ensuring a proper fit, is crucial to prevent allergic reactions and promote long-term comfort.\n 
      When to Seek Help: If a bump persists for more than two weeks or exhibits signs of infection, consulting a professional is essential. Signs of infection include increased pain, redness, swelling, pus, suspected keloid formation, fever, chills, or spreading redness. Prompt medical attention can prevent complications and ensure proper healing.\n
      If the bump persists for more than two weeks or shows signs of infection, consult a professional.
      `
    },
    {
      Blog_ID: 1113,
      Blog_Title: 'Rebound Piercing: Revitalizing Your Piercings',
      Blog_Image: 'Post3.png',
      Blog_Date: 'February 18, 2026',
      Blog_shortDescription: 'Have you experienced complications with a piercing?',
      Blog_Category: 'Service',
      Blog_fullContent: `Have you experienced complications with a piercing? Whether it's irritation, infection, migration, or simply a piercing you no longer love, Rebound Piercing offers expert solutions to restore your comfort and confidence. We understand that piercings can sometimes encounter challenges, and our specialized service is designed to address these issues with care and precision.\n
      Choosing a Safe Piercing Location: When it comes to ear piercings, not all locations are created equal in terms of safety and ease of healing. The earlobe remains the classic and generally safest option, as it consists primarily of soft tissue with a good blood supply, promoting faster healing. The helix, located along the upper cartilage rim of the ear, is another relatively safe choice, though it involves cartilage and thus requires a bit more care. The tragus, the small flap of cartilage in front of the ear canal, and the conch, which refers to the inner or outer cartilage of the ear's bowl, are also considered safe options when performed by a skilled professional. However, these cartilage piercings inherently carry a slightly higher risk of complications compared to earlobe piercings. \n 
      Piercing Assessment and Consultation: We begin with a thorough examination of your existing piercing, identifying the root cause of any problems. Our experienced piercers will listen to your concerns and provide personalized recommendations. This consultation involves discussing your medical history, current symptoms, and desired outcomes, ensuring a tailored approach.\n 
      Infection Management and Treatment: If your piercing is infected, we offer safe and effective treatments to eliminate the infection and promote healing. This may include gentle cleaning techniques, recommendations for appropriate aftercare products, and guidance on when to seek medical attention if necessary.\n
      Aftercare Education and Support: We believe in empowering our clients with the knowledge and tools they need to maintain healthy piercings. We provide comprehensive aftercare instructions and ongoing support to ensure optimal healing.
      `
    },
    {
      Blog_ID: 1114,
      Blog_Title: 'Troubled Piercings? Rebound Piercing Offers Expert Solutions for All Your Needs',
      Blog_Image: 'Post4.png',
      Blog_Date: 'February 15, 2026',
      Blog_shortDescription: ' Local studio provides comprehensive care for irritated, infected, or migrated piercings, emphasizing safety and client well-being',
      Blog_Category: 'Service',
      Blog_fullContent: `Local Studio Provides Comprehensive Care for Irritated, Infected, or Migrated Piercings, Emphasizing Safety and Client Well-being\n
      For those experiencing discomfort or complications with their piercings, a new local service is providing relief. Rebound Piercing, a specialized studio dedicated to resolving piercing issues, offers a comprehensive range of solutions for clients facing various challenges. From minor irritations to complex migrations, Rebound Piercing aims to restore comfort and confidence with expert care.\n
      We understand that piercings don't always heal as planned," says by Giang Bao Tran, a spokesperson for Rebound Piercing. "Our goal is to provide a safe and supportive environment where clients can address their concerns and achieve healthy, beautiful piercings.\n
      Rebound Piercing's services include thorough assessments to identify the root cause of piercing problems, infection management and treatment using safe and effective techniques, and migration solutions, including expert re-piercing when appropriate. Clients can also benefit from high-quality, hypoallergenic jewelry replacements, ensuring comfort and minimizing the risk of future complications.\n
      The studio emphasizes the importance of aftercare education, providing clients with detailed instructions and ongoing support to ensure optimal healing. For those considering retiring a piercing, Rebound Piercing offers safe closure services and scar revision advice.\n
      `
    },
    {
      Blog_ID: 1115,
      Blog_Title: 'How Long Does an Ear Piercing Take to Heal?',
      Blog_Image: 'Post5.jpg',
      Blog_Date: 'February 10, 2026',
      Blog_shortDescription: 'Understanding the healing timeline for different types of ear piercings.',
      Blog_Category: 'Aftercare',
      Blog_fullContent: `Ear Piercing Healing Time\n
      The healing time for ear piercings varies based on the location:\n
      • Earlobe: 6-8 weeks\n
      • Helix: 6-12 months\n
      • Tragus: 6-12 months\n
      • Conch: 6-12 months\n
      Factors that affect healing:\n
      1. Proper Aftercare: Proper aftercare is crucial for all ear piercings. This includes cleaning twice daily with a sterile saline solution, avoiding touching or rotating the jewelry with unwashed hands, and ensuring your jewelry is made from hypoallergenic materials like titanium or surgical steel. Even if your piercing looks healed, continue your aftercare routine for the full recommended time. Changing jewelry too soon can disrupt the healing process and lead to complications.\n
      2. Jewelry Material: When it comes to ear piercings, the material of your jewelry is paramount for both comfort and healing. Opting for hypoallergenic materials like implant-grade titanium or surgical stainless steel significantly reduces the risk of allergic reactions and irritation, making them ideal for initial piercings and sensitive skin. High-quality gold, specifically 14 or 18 karat, is another excellent choice, as it's less likely to cause adverse reactions. However, it's crucial to avoid nickel, a common allergen often found in cheaper jewelry, as it can lead to redness, itching, and bump formation. Ultimately, selecting the right jewelry material ensures a smoother healing process, minimizes complications, and allows you to enjoy your piercings with confidence and peace of mind.\n
      3. Individual Healing Response: It's important to remember that everyone's body heals at its own pace. While general timelines exist for ear piercing healing, individual healing responses can vary significantly. Factors such as age, overall health, and genetic predispositions can influence how quickly your body repairs the pierced tissue. Some individuals may experience faster healing due to a robust immune system or naturally efficient cellular regeneration, while others may require more time. This variability underscores the importance of attentive aftercare and patience throughout the healing process. Even if your piercing appears healed, it's wise to continue your aftercare routine for the full recommended duration, as the internal tissue may still be undergoing repair. Listen to your body, and consult a professional if you notice any persistent discomfort or unusual symptoms.\n
      4. Lifestyle & Hygiene: Your lifestyle and hygiene habits play a crucial role in the successful healing of an ear piercing. Maintaining good hygiene is essential to prevent infections and promote optimal healing. This includes washing your hands thoroughly before touching your piercing and cleaning the area twice daily with a sterile saline solution. Lifestyle factors such as diet, sleep, and stress levels can also impact healing. A balanced diet rich in vitamins and minerals supports tissue repair, while adequate sleep allows your body to dedicate resources to healing. Conversely, high stress levels can weaken the immune system, making you more susceptible to infections. Avoid activities that could traumatize the piercing, such as swimming in untreated water or engaging in contact sports, until the piercing is fully healed. Be mindful of hair products, cosmetics, and other substances that could irritate the piercing site. A clean environment and healthy habits create the ideal conditions for a smooth and comfortable healing journey.\n
    `
    }
  ];

  selectedPost: BlogPost | null = null;

  selectPost(post: BlogPost) {
    this.selectedPost = {
      ...post,
      Blog_fullContent: this.formatContent(post.Blog_fullContent), // Process content
    };

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  }

  backToBlogList() {
    this.selectedPost = null;
  }

  // Function to replace newlines with <br>
  formatContent(content?: string): string {
    return content ? content.replace(/\n/g, '<br>') : '';
  }
}
