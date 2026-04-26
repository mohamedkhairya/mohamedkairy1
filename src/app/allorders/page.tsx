// قم بإزالة "use client" من هنا ليعمل الـ async
import React from 'react'
import { Package, Calendar, MapPin, CheckCircle2, Clock, ChevronRight, ShoppingBag } from 'lucide-react'
import { getUserOrders } from '@/servicesApi/Api'

const AllOrders = async () => {

  const orders = await getUserOrders()

  const ordersList = Array.isArray(orders) ? orders : []

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight flex items-center gap-3">
              <Package className="text-green-600" size={36} /> My Orders
            </h1>
            <p className="text-gray-500 mt-2 font-medium">Track and manage your recent purchases</p>
          </div>
          <div className="flex items-center gap-3 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm font-bold">
              {ordersList.length} Orders Placed
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-8">
          {ordersList.map((order: any) => (
            <div key={order._id} className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              
              {/* Order Top Bar */}
              <div className="bg-gray-50/50 px-8 py-6 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Order ID</p>
                    <p className="font-black text-gray-900">#{order.id}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Date</p>
                    <div className="flex items-center gap-1.5 font-bold text-gray-700">
                      <Calendar size={14} className="text-green-600" />
                      {new Date(order.createdAt).toLocaleDateString()} 
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {order.isPaid ? (
                    <span className="bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border border-green-100">
                      <CheckCircle2 size={14} /> Paid
                    </span>
                  ) : (
                    <span className="bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border border-amber-100">
                      <Clock size={14} /> Unpaid
                    </span>
                  )}
                  <div className="text-right">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Total Amount</p>
                    <p className="text-xl font-black text-green-600">{order.totalOrderPrice} <small className="text-xs">EGP</small></p>
                  </div>
                </div>
              </div>

              {/* Items Section */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {order.cartItems.map((item: any) => (
                      <div key={item._id} className="flex items-center gap-4 group">
                        <div className="w-16 h-16 bg-gray-50 rounded-2xl border border-gray-100 flex-shrink-0 p-2 overflow-hidden transition-transform group-hover:scale-105">
                          <img src={item.product.imageCover} alt={item.product.title} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 text-sm line-clamp-1">{item.product.title}</h4>
                          <p className="text-xs text-gray-400 font-medium">Qty: {item.count} × {item.price} EGP</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Progress & Details */}
                  <div className="bg-gray-50 rounded-3xl p-6 flex flex-col justify-between border border-gray-100/50">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-3">
                        <div className="bg-white p-2 rounded-xl shadow-sm text-green-600">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-400">Delivery Status</p>
                          <p className="text-sm font-bold text-gray-800">
                            {order.isDelivered ? "Delivered to your door" : "Processing Shipment"}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="text-gray-300" />
                    </div>
                    
                    <button className="w-full bg-white hover:bg-gray-100 text-gray-900 py-3 rounded-xl font-bold text-sm transition-all border border-gray-200 shadow-sm active:scale-95">
                      Order Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {ordersList.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-200">
            <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={40} className="text-gray-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">No orders yet</h3>
            <p className="text-gray-500 mt-2">Start shopping to see your orders here!</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default AllOrders