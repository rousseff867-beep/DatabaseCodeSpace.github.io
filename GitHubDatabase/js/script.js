// 简单的页面交互
document.addEventListener('DOMContentLoaded', function() {
    console.log('数据库课程作业页面加载完成');
    
    // 为目录项添加悬停效果
    const directoryItems = document.querySelectorAll('.folder-item, .file-item');
    directoryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#e9ecef';
            this.style.transition = 'background-color 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
    
    // 更新版权年份
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('footer p');
    yearElement.innerHTML = `&copy; ${currentYear} 数据库课程作业 - jk12222222`;
    
    // 添加加载动画
    const sections = document.querySelectorAll('main section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
});