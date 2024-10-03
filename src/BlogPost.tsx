import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Sun, Moon, ArrowLeft } from 'lucide-react'
import { ENV } from './env'

interface Article {
  title: string
  description: string
  author: string
  publishedAt: string
  url: string
  urlToImage: string
  content: string
}

const BlogPost: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { id } = useParams<{ id: string }>()

  // useEffect(() => {
  //   setLoading(true)
  //   fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${ENV.REACT_APP_NEWS_API_KEY}`)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch blog post')
  //       }
  //       return response.json()
  //     })
  //     .then(data => {
  //       const selectedArticle = data.articles[Number(id)]
  //       if (selectedArticle) {
  //         setArticle(selectedArticle)
  //       } else {
  //         setError('Article not found')
  //       }
  //       setLoading(false)
  //     })
  //     .catch(err => {
  //       setError(err.message)
  //       setLoading(false)
  //     })
  // }, [id])

  useEffect(() => {
    setLoading(true)

    // Fetch articles from jsonbin.io using the key from .env
    fetch(`https://api.jsonbin.io/v3/b/${ENV.REACT_APP_JSONBIN_KEY}`, {
      method: 'GET',
      headers: {
        'X-Master-Key': '$2a$10$AQoXfTUE47Bca7rJCKZSJelsW240JmCf5iTS03J6Xa.eFOGHH./4m' 
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch blog post')
        }
        return response.json()
      })
      .then(data => {
        const selectedArticle = data.record.articles[Number(id)]
        if (selectedArticle) {
          setArticle(selectedArticle)
        } else {
          setError('Article not found')
        }
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 min-h-screen p-4 sm:p-6 md:p-8 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link to="/blog" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300">
              <ArrowLeft size={24} className="mr-2" />
              <span>Back to Blog List</span>
            </Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
          
          {loading && (
            <div className="text-center text-gray-600 dark:text-gray-400">Loading blog post...</div>
          )}

          {error && (
            <div className="text-center text-red-600 dark:text-red-400" role="alert">{error}</div>
          )}

          {article && (
            <article className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">{article.title}</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">By {article.author || 'Unknown'} | {new Date(article.publishedAt).toLocaleDateString()}</p>
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="w-full h-64 object-cover rounded-lg mb-6" />
              )}
              <div className="prose dark:prose-invert max-w-none">
                <p className="mb-4 text-gray-700 dark:text-gray-300">{article.content}</p>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300">
                  Read full article on TechCrunch
                </a>
              </div>
            </article>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogPost