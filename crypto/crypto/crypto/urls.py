
from django.urls import path
from . import views

def home(request):
    return render(request, 'index.html', )


urlpatterns = [
    path('', views.home, name="home"),
    path('prices/', views.prices, name="prices"),
    path('news/', views.news, name="news"),
]
