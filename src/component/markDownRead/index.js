import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './MarkdownReader.css';


class MarkdownReader extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      files: [
        {
          name: "技术文档",
          children: [
            {
                name: "前端指南.md",
                content: require('./react_路由.md')
              },
            {
              name: "后端手册.md",
              content: "## Node.js 基础\n\n安装命令：\n```bash\nnpm install express\n```"
            }
          ]
        },
        {
          name: "随笔",
          children: [
            {
              name: "旅行笔记.md",
              content: "# 日本游记\n\n**东京塔**夜景令人难忘..."
            }
          ]
        }
      ],
      currentContent: '',
      isDarkMode: false
    };
  }

  handleFileClick = (fileData) => {
    this.setState({ currentContent: fileData.content });
  };

  renderTree = (items) => (
    <ul className="directory-tree">
      {items.map((item, index) => (
        <li key={index}>
          {item.children ? (
            <details>
              <summary>{item.name}</summary>
              {this.renderTree(item.children)}
            </details>
          ) : (
            <button
              className="file-item"
              onClick={() => this.handleFileClick(item)}
            >
              📄 {item.name.replace('.md', '')}
            </button>
          )}
        </li>
      ))}
    </ul>
  );

  toggleTheme = () => {
    this.setState(prev => ({ isDarkMode: !prev.isDarkMode }));
  };

  render() {
    const { files, currentContent, isDarkMode } = this.state;
    
    return (
      <div className={`app-container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
        <header className="app-header">
          <h1>静态文档中心</h1>
          <div className="controls">
            <button onClick={this.toggleTheme}>
              {isDarkMode ? '☀️ 浅色模式' : '🌙 深色模式'}
            </button>
          </div>
        </header>

        <div className="content-wrapper">
          <aside className="directory-panel">
            {this.renderTree(files)}
          </aside>

          <main className="markdown-preview">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code: ({ node, ...props }) => (
                  <code className="code-block" {...props} />
                )
              }}
            >
              {currentContent || '请从左侧选择文档'}
            </ReactMarkdown>
          </main>
        </div>
      </div>
    );
  }
}

export default MarkdownReader;