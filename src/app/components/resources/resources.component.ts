import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface BlogPost {
  id: number;
  title: string;
  category: 'Career Advice' | 'AI in Recruitment' | 'Success Stories';
  excerpt: string;
  date: Date;
  imageUrl: string;
  readTime: string;
}

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  activeCategory: string = 'All';
  searchQuery: string = '';

  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '5 Tips for Career Advancement in Tech',
      category: 'Career Advice',
      excerpt: 'Learn how to navigate your tech career path with these proven strategies...',
      date: new Date('2023-05-15'),
      imageUrl: 'assets/images/career-advice.jpg',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'How AI is Transforming Hiring Processes',
      category: 'AI in Recruitment',
      excerpt: 'Discover the latest AI tools revolutionizing talent acquisition...',
      date: new Date('2023-06-22'),
      imageUrl: 'assets/images/ai-recruitment.jpg',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'From Intern to CTO: A Success Story',
      category: 'Success Stories',
      excerpt: 'Follow John Doe\'s incredible journey through the ranks of a Fortune 500 company...',
      date: new Date('2023-07-10'),
      imageUrl: 'assets/images/success-story.jpg',
      readTime: '12 min read'
    }
  ];

  get filteredPosts() {
    return this.blogPosts.filter(post => {
      const matchesCategory = this.activeCategory === 'All' || post.category === this.activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  get categories() {
    return ['All', 'Career Advice', 'AI in Recruitment', 'Success Stories'];
  }

  setCategory(category: string) {
    this.activeCategory = category;
  }
}