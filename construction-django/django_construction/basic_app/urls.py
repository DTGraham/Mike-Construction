from django.urls import path
from .views import (
    HomeView,
    ContactView,
    ProjectsView,
    Project1View,
    Project2View,
    Project3View,
    Project4View,
)

urlpatterns = [
    path("", HomeView.as_view(), name="home"),
    path("contact/", ContactView.as_view(), name="contact"),
    path("projects/", ProjectsView.as_view(), name="projects"),
    path("projects/project-1/", Project1View.as_view(), name="project1"),
    path("projects/project-2/", Project2View.as_view(), name="project2"),
    path("projects/project-3/", Project3View.as_view(), name="project3"),
    path("projects/project-4/", Project4View.as_view(), name="project4"),
]

