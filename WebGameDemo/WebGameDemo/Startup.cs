using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebGameDemo.Startup))]
namespace WebGameDemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
