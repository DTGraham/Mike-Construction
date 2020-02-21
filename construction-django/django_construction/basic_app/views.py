from django.shortcuts import render
from django.views.generic import TemplateView


# Create your views here.
class HomeView(TemplateView):
    template_name = "basic_app/home.html"


class ContactView(TemplateView):
    template_name = "basic_app/contact.html"


class ProjectsView(TemplateView):
    template_name = "basic_app/projects.html"


class Project1View(TemplateView):
    template_name = "basic_app/project1.html"


class Project2View(TemplateView):
    template_name = "basic_app/project2.html"


class Project3View(TemplateView):
    template_name = "basic_app/project3.html"


class Project4View(TemplateView):
    template_name = "basic_app/project4.html"

