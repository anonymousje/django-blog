from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Article
from django.contrib.auth.decorators import login_required
from . import forms

# Create your views here.
def article_list(request):
    articles = Article.objects.all()
    return render(request, 'articles/articles_list.html', {'articles': articles})

def article_details(request, slug):
    article = Article.objects.get(slug=slug)
    return render(request, 'articles/article.html', {'article': article} )


@login_required(login_url="/accounts/login/")
def create_article(request):
    if request.method == 'POST':
        form = forms.CreateArticle(request.POST)
        if form.is_valid():
            instance = form.save(commit=False)
            instance.author= request.user
            instance.save()
            return redirect('articles:list')
    else:
        form = forms.CreateArticle()

    return render(request, 'articles/create.html', {'form':form})
