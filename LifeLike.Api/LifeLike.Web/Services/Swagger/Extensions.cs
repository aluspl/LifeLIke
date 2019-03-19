using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace LifeLike.Web.Services.Swagger
{
    public static class Extensions{
        public static IServiceCollection AddSwaggerSetting(this IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "QuickApp API", Version = "v1" });
            });
            return services;
        }
        public static IApplicationBuilder UseSwaggerSetting(this IApplicationBuilder app)
        {
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "QuickApp API V1");
            });
            return app;
        }

    }
}