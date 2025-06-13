# Todo App

A beautiful and modern todo application built with Next.js, TypeScript, and Tailwind CSS.

## Features

### ✨ Core Functionality
- **Add Todos**: Create new tasks with a clean, intuitive interface
- **Mark Complete**: Toggle completion status with visual feedback
- **Edit Todos**: Double-click any todo to edit it inline
- **Delete Todos**: Remove tasks with hover-to-reveal delete buttons
- **Persistent Storage**: All todos are saved to localStorage

### 🎨 Modern UI/UX
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Beautiful Animations**: Smooth transitions and hover effects
- **Clean Interface**: Minimalist design with modern typography
- **Visual Feedback**: Clear indicators for completed vs. active todos

### 🔍 Advanced Features
- **Filter System**: View All, Active, or Completed todos
- **Progress Tracking**: See how many tasks remain
- **Bulk Actions**: Clear all completed todos at once
- **Keyboard Shortcuts**: Enter to save, Escape to cancel edits

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - Modern state management
- **localStorage** - Client-side persistence

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd todo-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Usage

1. **Adding Todos**: Type in the input field and press Enter or click the + button
2. **Completing Todos**: Click the circle button next to any todo
3. **Editing Todos**: Double-click on any todo text to edit it inline
4. **Deleting Todos**: Hover over a todo and click the trash icon
5. **Filtering**: Use the All/Active/Completed buttons to filter your view
6. **Clearing Completed**: Click "Clear completed" to remove all finished tasks

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AddTodo.tsx
│   ├── TodoFilters.tsx
│   ├── TodoItem.tsx
│   └── TodoList.tsx
└── types/
    └── todo.ts
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for learning or building upon it.

---

Built with ❤️ using Next.js and Tailwind CSS
