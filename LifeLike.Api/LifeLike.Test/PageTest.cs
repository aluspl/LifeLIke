﻿using LifeLike.Repositories;
using Xunit;

namespace LifeLike.Test
{
    public class PageTest
    {
        private IPageService _pageRepository;

        public PageTest(IPageService pageRepository)
        {
            _pageRepository = pageRepository;
        }

        [Fact]
        public void AnyPage()
        {
            Assert.Equal(1,1);

        }
        [Theory]
        [InlineData(3)]
        [InlineData(4)]
        [InlineData(6)]
        public void PassingTest(int value)
        {
            Assert.Equal(4, value);
        }

    }
}