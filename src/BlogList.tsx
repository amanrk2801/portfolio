import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Sun, Moon, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import { ENV } from './env'
import React from 'react'

interface Article {
  title: string
  description: string
  author: string
  publishedAt: string
  url: string
}

export default function BlogList() {
  const [darkMode, setDarkMode] = useState(true)
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = Number(searchParams.get('page') || '1')
  const articlesPerPage = 5

  // useEffect(() => {
  //   setLoading(true)
  //   fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${ENV.REACT_APP_NEWS_API_KEY}`)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch blog posts')
  //       }
  //       return response.json()
  //     })
  //     .then(data => {
  //       setArticles(data.articles)
  //       setLoading(false)
  //     })
  //     .catch(err => {
  //       setError(err.message)
  //       setLoading(false)
  //     })
  // }, [])

  useEffect(() => {
    setLoading(true)

    // Fetch articles from jsonbin.io using the provided API key
    fetch(`https://api.jsonbin.io/v3/b/${ENV.REACT_APP_JSONBIN_KEY}`, {
      method: 'GET',
      headers: {
        'X-Master-Key': '$2a$10$AQoXfTUE47Bca7rJCKZSJelsW240JmCf5iTS03J6Xa.eFOGHH./4m' 
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts')
        }
        return response.json()
      })
      .then(data => {
        setArticles(data.record.articles)  // Access the 'articles' from the jsonbin.io response
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const totalPages = Math.ceil(articles.length / articlesPerPage)
  const paginatedArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  )

  const goToPage = (page: number) => {
    setSearchParams({ page: page.toString() })
  }

  const PaginationButton = ({ page, isCurrent }: { page: number | string, isCurrent?: boolean }) => (
    <button
      onClick={() => typeof page === 'number' && goToPage(page)}
      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
        isCurrent
          ? 'bg-blue-600 text-white'
          : 'bg-gray-700 text-white hover:bg-gray-600'
      }`}
      disabled={typeof page !== 'number'}
    >
      {page}
    </button>
  )

  const Pagination = () => {
    const pageNumbers = []
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, '...', totalPages)
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages)
      } else {
        pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages)
      }
    }

    return (
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center transition-colors duration-300 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <ChevronLeft size={24} />
        </button>
        {pageNumbers.map((page, index) => (
          <PaginationButton key={index} page={page} isCurrent={page === currentPage} />
        ))}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center transition-colors duration-300 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 min-h-screen p-4 sm:p-6 md:p-8 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300">
              <ArrowLeft size={24} className="mr-2" />
              <span>Back to Portfolio</span>
            </Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
          
          <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">TechCrunch Blog</h1>
          
          {loading && (
            <div className="text-center text-gray-600 dark:text-gray-400">Loading blog posts...</div>
          )}

          {error && (
            <div className="text-center text-red-600 dark:text-red-400" role="alert">{error}</div>
          )}

          <div className="space-y-8">
            {paginatedArticles.map((article, index) => (
              <article key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
                  <Link to={`/blog/${(currentPage - 1) * articlesPerPage + index}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">By {article.author || 'Unknown'} | {new Date(article.publishedAt).toLocaleDateString()}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{article.description}</p>
                <Link to={`/blog/${(currentPage - 1) * articlesPerPage + index}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300">
                  Read more
                </Link>
              </article>
            ))}
          </div>

          <Pagination />
        </div>
      </div>
    </div>
  )
}