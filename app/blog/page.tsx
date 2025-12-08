export default function BlogPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Blog
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Stay updated with the latest news and insights in cyber law
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Coming Soon
            </h2>
            <p className="text-gray-600">
              Our blog section is under development. Check back soon for articles on cyber law, data privacy, and digital security.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

